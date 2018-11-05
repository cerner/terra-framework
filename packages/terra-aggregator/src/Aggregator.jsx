import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager } from 'terra-disclosure-manager';

const propTypes = {
  /**
   * The components that will be managed by the Aggregator. Each component provided will be provided with an 'aggregatorDelegate' prop
   * containing the Aggregator API. Keys must also be provided to allow the Aggregator to uniquely identify the component.
   * Immutable objects are preferred.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
  })),
  /**
   * A function that will override the Aggregators default render. The function will receive an Object parameter data necessary for the
   * render process.
   */
  render: PropTypes.func,
  /**
   */
  disclosureManager: PropTypes.object,
};

const defaultProps = {
  items: [],
};

class Aggregator extends React.Component {
  constructor(props) {
    super(props);

    this.requestFocus = this.requestFocus.bind(this);
    this.releaseFocus = this.releaseFocus.bind(this);
    this.setFocusState = this.setFocusState.bind(this);
    this.resetFocusState = this.resetFocusState.bind(this);
    this.renderItems = this.renderItems.bind(this);

    this.state = {
      focusedItemId: undefined,
      focusedItemState: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    const { focusedItemId } = this.state;

    if (nextProps.items !== this.props.items) {
      // If the currently focused item is not present in the new items set,
      // the focus is forcefully released to clean up any presented disclosures.
      let focusItemIsPresent;
      items.forEach((item) => {
        if (item.key === focusedItemId) {
          focusItemIsPresent = true;
        }
      });

      if (!focusItemIsPresent) {
        this.releaseFocus(undefined, true);
      }
    }
  }

  setFocusState(itemKey, itemState) {
    this.setState({
      focusedItemId: itemKey,
      focusedItemState: itemState,
    });
  }

  resetFocusState() {
    this.setFocusState();
  }

  requestFocus(itemId, itemState) {
    const { disclosureManager } = this.props;
    const { focusedItemId } = this.state;

    return new Promise((resolve, reject) => {
      this.releaseFocus(focusedItemId)
        .then(() => {
          this.setFocusState(itemId, Object.freeze(itemState || {}));

          const focusRequestPayload = {};

          /**
           * If the Aggregator is rendered within the context of a DisclosureManager, the focus request is resolved with a custom
           * disclose implementation.
           */
          if (disclosureManager) {
            focusRequestPayload.disclose = (data) => {
              /**
               * If the itemId no longer matches the focusedItemId, then the disclose is being called after
               * the item has lost focus. This can happen if an Aggregator item caches the disclosue function they're given
               * and calls it later.
               */
              if (this.state.focusedItemId !== itemId) {
                return Promise.reject();
              }

              return disclosureManager.disclose(data)
                .then(({ afterDismiss, dismissDisclosure, ...other }) => {
                  /**
                   * The disclosure's dismissDisclosure instance is cached so it can be called later. If an Aggregator item is
                   * currently presenting a disclosure and releases focus, we will call this function to force
                   * the disclosure to close.
                   */
                  this.forceDismissInstance = dismissDisclosure;

                  /**
                   * A handler is added to the deferred afterDismiss promise chain to remove the cached dismissDisclosure instance (the disclosure is
                   * closing, so it is no longer relevant). The handler also resets the focus state if focus is currently held by a component.
                   */
                  afterDismiss.then(() => {
                    this.forceDismissInstance = undefined;

                    if (this.state.focusedItemId) {
                      this.resetFocusState();
                    }
                  });

                  // We return the same API so as not to disrupt the chain.
                  return { afterDismiss, dismissDisclosure, ...other };
                });
            };
          }

          resolve(focusRequestPayload);
        })
        .catch(() => {
          reject();
        });
    });
  }

  releaseFocus(itemId, force) {
    // If nothing is currently in focus, we can resolve immediately.
    if (!this.state.focusedItemId) {
      return Promise.resolve();
    }

    /**
     * If the provided item ID is not the currently focused ID, and the release is not forced,
     * the release is rejected to protect against delayed calls.
     */
    if (itemId !== this.state.focusedItemId && !force) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      /**
       * If forceDismissInstance is present, a disclosure must have been opened by the currently focused
       * Aggregator item. Therefore, we will call the forceDismissInstance in order to keep things in sync. The promise
       * returned by forceDismissInstance will be inserted into the Promise chain. If the promise is rejected,
       * the Aggregator's focus state will not be reset.
       *
       * The focus is only reset if the disclosure was dismissed successfully.
       */
      if (this.forceDismissInstance) {
        this.forceDismissInstance()
          .then(() => {
            this.resetFocusState();
            resolve();
          })
          .catch(() => {
            reject();
          });
      } else {
        // If a previous disclosure is not detected, we can immediately resolve and reset the focus.
        this.resetFocusState();
        resolve();
      }
    });
  }

  renderItems() {
    const { items } = this.props;
    const { focusedItemId, focusedItemState } = this.state;

    return items.map((item) => {
      const childIsActive = focusedItemId === item.key;

      /**
       * Each child given to the Aggregator is provided with an 'aggregatorDelegate' prop with the following values:
       * hasFocus - A Boolean flag indicating whether or not the child is currently focused
       * requestFocus - A function that will attempt to provide focus to the calling child. It takes an Object parameter that
       *                should hold state data relevant to the focus event. The function returns a Promise that is resolved if
       *                the focus request was successful. The Promise is resolved with a 'disclose' function that can be used to
       *                disclose further content in a manner managed by the Aggregator. If the focus request was unsuccessful, the
       *                Promise will be rejected.
       * releaseFocus - A function that will attempt to release the focus held by the calling child. Returns a promse that is
       *                resolved if the release request was successful. If the release request was unsuccessful, the
       *                Promise will be rejected. This function is only provided to components that are focused.
       * itemState     - An Object containing the state given to the Aggregator during the focus request.
       */
      return React.cloneElement(item.component, {
        key: item.key,
        aggregatorDelegate: {
          hasFocus: childIsActive,
          requestFocus: state => this.requestFocus(item.key, state),
          releaseFocus: childIsActive ? () => (this.releaseFocus(item.key)) : undefined,
          itemState: childIsActive ? focusedItemState : undefined,
        },
      });
    });
  }

  render() {
    const renderedItems = this.renderItems();

    if (this.props.render) {
      return this.props.render({ items: renderedItems });
    }

    return (
      <div>
        {renderedItems}
      </div>
    );
  }
}

Aggregator.propTypes = propTypes;
Aggregator.defaultProps = defaultProps;

export default withDisclosureManager(Aggregator);
