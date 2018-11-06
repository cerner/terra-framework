import React from 'react';
import PropTypes from 'prop-types';
import DisclosureManagerDelegate from './DisclosureManagerDelegate';
import DisclosureManagerContext from './DisclosureManagerContext';
import withDisclosureManager from './withDisclosureManager';

const availableDisclosureSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  FULLSCREEN: 'fullscreen',
};

const arrayReducer = (mappingObject, value) => Object.assign({ [`${value}`]: value }, mappingObject);
const availableDisclosureHeights = [240, 420, 600, 690, 780, 870, 960, 1140].reduce(arrayReducer, {});
const availableDisclosureWidths = [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1760, 1920].reduce(arrayReducer, {});

const defaultDimensions = { height: availableDisclosureHeights['690'], width: availableDisclosureWidths['1120'] };
const defaultSize = availableDisclosureSizes.SMALL;

const isValidDimensions = dimensions => availableDisclosureHeights[dimensions.height] && availableDisclosureWidths[dimensions.width];

const isValidSize = size => !!availableDisclosureSizes[size.toUpperCase()];

export { availableDisclosureSizes, availableDisclosureHeights, availableDisclosureWidths };

const propTypes = {
  /**
   * The child components that will be provided the disclosure functionality.
   */
  children: PropTypes.node,
  /**
   * A function used to provide rendering capabilities to the DisclosureManager.
   */
  render: PropTypes.func.isRequired,
  /**
   * An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will
   * utilize its 'app' prop and forward the request instead of handling the request itself.
   */
  supportedDisclosureTypes: PropTypes.array,
  /**
   * A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all
   * disclose requests coming from disclosured components, regardless of the preferred disclosure type.
   */
  trapNestedDisclosureRequests: PropTypes.bool,
  /**
   * A DisclosureManagerDelegate instance provided by a parent DisclosureManager. This prop is automatically provided by `withDisclosureManager` and should not
   * be explicitly given to the component.
   */
  disclosureManager: DisclosureManagerDelegate.propType,
};

const defaultProps = {
  supportedDisclosureTypes: [],
};

class DisclosureManager extends React.Component {
  /**
   * Clones the current disclosure component state objects and returns the structure for further mutation.
   */
  static cloneDisclosureState(state) {
    const newState = Object.assign({}, state);
    newState.disclosureComponentKeys = Object.assign([], newState.disclosureComponentKeys);
    newState.disclosureComponentData = Object.assign({}, newState.disclosureComponentData);
    newState.disclosureComponents = Object.assign([], newState.disclosureComponents);

    return newState;
  }

  constructor(props) {
    super(props);

    this.resolveDismissPromise = this.resolveDismissPromise.bind(this);
    this.resolveDismissChecksInSequence = this.resolveDismissChecksInSequence.bind(this);

    this.disclosureTypeIsSupported = this.disclosureTypeIsSupported.bind(this);
    this.safelyCloseDisclosure = this.safelyCloseDisclosure.bind(this);
    this.generatePopFunction = this.generatePopFunction.bind(this);

    this.renderContentComponents = this.renderContentComponents.bind(this);
    this.renderDisclosureComponents = this.renderDisclosureComponents.bind(this);

    this.openDisclosure = this.openDisclosure.bind(this);
    this.pushDisclosure = this.pushDisclosure.bind(this);
    this.popDisclosure = this.popDisclosure.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.requestDisclosureFocus = this.requestDisclosureFocus.bind(this);
    this.releaseDisclosureFocus = this.releaseDisclosureFocus.bind(this);
    this.maximizeDisclosure = this.maximizeDisclosure.bind(this);
    this.minimizeDisclosure = this.minimizeDisclosure.bind(this);

    // These cached functions are stored outside of state to prevent unnecessary rerenders.
    this.dismissChecks = {};
    this.onDismissResolvers = {};

    this.state = {
      childComponents: this.renderContentComponents(props.disclosureManager, props.children),
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
      disclosureComponents: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { children, disclosureManager } = this.props;

    if (children !== prevProps.children || disclosureManager !== prevProps.disclosureManager) {
      /**
       * With the future deprecation of componentWillReceiveProps, there is no existing lifecycle method
       * that allows for old and new prop comparisons before rendering. componentDidUpdate can be
       * used to ensure that the state is sycned with the props when necessary; however, if the state does
       * need to be updated, a second render will need to occur. I do not anticipate this happening often
       * given how the component is typically consumed.
       *
       * Usage of setState in componentDidUpdate is flagged by eslint due to the potential of infinite renders.
       * However, this implementation of setState should be safe.
       */
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        childComponents: this.renderContentComponents(disclosureManager, children),
        disclosureIsOpen: false,
        disclosureIsFocused: false,
        disclosureIsMaximized: false,
        disclosureSize: undefined,
        disclosureDimensions: undefined,
        disclosureComponentKeys: [],
        disclosureComponentData: {},
        disclosureComponents: [],
      });
    }
  }

  /**
   * Determines if the provided disclosure type is supported by the DisclosureManager.
   * @return `true` if the type is supported or if there is no fallback `disclosureManager` present. `false` is returned otherwise.
   */
  disclosureTypeIsSupported(type) {
    const { disclosureManager, supportedDisclosureTypes } = this.props;

    return supportedDisclosureTypes.indexOf(type) >= 0 || !disclosureManager;
  }

  openDisclosure(data) {
    let { dimensions } = data;
    if (dimensions && !isValidDimensions(dimensions)) {
      // dimensions were provided, but are invalid, set the default
      dimensions = defaultDimensions;
    }

    // eslint-disable-next-line prefer-destructuring
    let size = data.size;
    if (!size || (size && !isValidSize(size))) {
      // no valid size passed
      if (!dimensions) {
        // no valid size and no valid dimensions, set the default
        dimensions = defaultDimensions;
      }
      // ensure size set for pacivity
      size = defaultSize;
    }

    const newState = {
      disclosureIsOpen: true,
      disclosureIsFocused: true,
      disclosureSize: size,
      disclosureDimensions: dimensions,
      disclosureComponentKeys: [data.content.key],
      disclosureComponentData: {
        [data.content.key]: {
          key: data.content.key,
          name: data.content.name,
          props: data.content.props,
          component: data.content.component,
        },
      },
    };

    this.setState(Object.assign(newState, { disclosureComponents: this.renderDisclosureComponents(this.props.disclosureManager, newState, undefined, this.props.trapNestedDisclosureRequests) }));
  }

  pushDisclosure(data) {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    newState.disclosureComponentKeys.push(data.content.key);
    newState.disclosureComponentData[data.content.key] = {
      key: data.content.key,
      name: data.content.name,
      props: data.content.props,
      component: data.content.component,
    };
    newState.disclosureComponents = newState.disclosureComponents.concat(this.renderDisclosureComponents(this.props.disclosureManager, newState, [data.content.key], this.props.trapNestedDisclosureRequests));

    this.setState(newState);
  }

  popDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    newState.disclosureComponentData[newState.disclosureComponentKeys.pop()] = undefined;
    newState.disclosureComponents.pop();

    this.setState(newState);
  }

  closeDisclosure() {
    this.setState({
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
      disclosureComponents: [],
    });
  }

  requestDisclosureFocus() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsFocused = true;

    this.setState(Object.assign(newState, { disclosureComponents: this.renderDisclosureComponents(this.props.disclosureManager, newState, undefined, this.props.trapNestedDisclosureRequests) }));
  }

  releaseDisclosureFocus() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsFocused = false;

    this.setState(Object.assign(newState, { disclosureComponents: this.renderDisclosureComponents(this.props.disclosureManager, newState, undefined, this.props.trapNestedDisclosureRequests) }));
  }

  maximizeDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsMaximized = true;

    this.setState(Object.assign(newState, { disclosureComponents: this.renderDisclosureComponents(this.props.disclosureManager, newState, undefined, this.props.trapNestedDisclosureRequests) }));
  }

  minimizeDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsMaximized = false;

    this.setState(Object.assign(newState, { disclosureComponents: this.renderDisclosureComponents(this.props.disclosureManager, newState, undefined, this.props.trapNestedDisclosureRequests) }));
  }

  /**
   * Looks up the deferred afterDismiss promise for the provided disclosure key and
   * resolves it.
   */
  resolveDismissPromise(key) {
    const resolve = this.onDismissResolvers[key];
    if (resolve) {
      resolve();
    }
    this.onDismissResolvers[key] = undefined;
  }

  /**
   * Resolves the dismiss checks for the current disclosure components in sequence. The Promise will either resolve if all checks resolve or
   * reject on the first detected rejection. This ensures that checks do not occur for components after the first rejection.
   */
  resolveDismissChecksInSequence(keys) {
    return new Promise((resolve, reject) => {
      if (!keys.length) {
        resolve();
        return;
      }

      const key = keys.pop();

      this.generatePopFunction(key)()
        .then(() => {
          this.resolveDismissChecksInSequence(keys).then(resolve).catch(reject);
        })
        .catch(() => {
          reject();
        });
    });
  }

  /**
   * Closes the disclosure after calling all checks and resolving all deferred promises.
   * @return A Promise, resolved if the close was performed or rejected if it was not.
   */
  safelyCloseDisclosure() {
    const disclosureKeys = Object.assign([], this.state.disclosureComponentKeys);

    /**
     * Before closing the disclosure, the dismiss checks for components in the stack are
     * executed in stack order. Components will be dismissed in order up until a rejection occurs, at which point
     * the blocking component will be presented.
     */
    return this.resolveDismissChecksInSequence(disclosureKeys).then(() => {
      this.dismissChecks = {};
      this.closeDisclosure();
    });
  }

  /**
   * Creates an instance of a pop function for the component represented by the given key.
   */
  generatePopFunction(key) {
    return () => {
      let promiseRoot = Promise.resolve();

      const dismissCheck = this.dismissChecks[key];
      if (dismissCheck) {
        promiseRoot = dismissCheck();
      }

      return promiseRoot
        .then(() => {
          this.dismissChecks[key] = undefined;
          this.resolveDismissPromise(key);
        })
        .then(() => {
          this.popDisclosure();
        });
    };
  }

  /**
   * Generates an Array of component instances based on the given children. These components can be stored in state to ensure subsequent
   * renders are more efficient and do not unnecessarily generate new DisclosureManagerDelegate instances.
   * @param {DisclosureManagerDelegate} disclosureManager A DisclosureManagerDelegate instance that will be used as a fallback in cases where unsupported
   *                                                      disclosure types are requested.
   * @param {Children} children The children prop value that will be wrapped in the generated provider.
   */
  renderContentComponents(disclosureManager, children) {
    const delegate = {};

    /**
     * The disclose function provided will open the disclosure with the provided content.
     */
    delegate.disclose = (data) => {
      if (this.disclosureTypeIsSupported(data.preferredType)) {
        return this.safelyCloseDisclosure()
          .then(() => {
            this.openDisclosure(data);
            /**
             * The disclose Promise chain is resolved with a set of APIs that the disclosing content can use to
             * manipulate the disclosure, if necessary.
             */
            return {
              /**
               * The afterDismiss value is a deferred Promise that will be resolved when the disclosed component is dismissed.
               */
              afterDismiss: new Promise((resolve) => {
                this.onDismissResolvers[data.content.key] = resolve;
              }),
              /**
               * The dismissDisclosure value is a function that the disclosing component can use to manually close the disclosure.
               * Any and all dismiss checks are still performed.
               */
              dismissDisclosure: this.safelyCloseDisclosure,
            };
          });
      }
      return disclosureManager.disclose(data);
    };

    return (
      <DisclosureManagerContext.Provider value={DisclosureManagerDelegate.create(delegate)}>
        {children}
      </DisclosureManagerContext.Provider>
    );
  }

  /**
   * Generates an Array of component instances based on the given disclosure state. These components can be stored in state to ensure subsequent
   * renders are more efficient and do not unnecessarily generate new DisclosureManagerDelegate instances.
   * @param {DisclosureManagerDelegate} disclosureManager A DisclosureManagerDelegate instance that will be used as a fallback in cases where unsupported
   *                                                      disclosure types are requested.
   * @param {Object} disclosureState An Object representing the state of the disclosure manager.
   * @param {Array} componentKeysOverride An Array of component keys representing the components that are to be generated. If not provided, all component keys
   *                                      found in the disclosureState will be used for generation.
   * @param {Boolean} trapNestedDisclosureRequests A Boolean value indicating whether or not disclosures for disclosure components should be strict.
   */
  renderDisclosureComponents(disclosureManager, disclosureState, componentKeysOverride, trapNestedDisclosureRequests) {
    const {
      disclosureComponentKeys, disclosureComponentData, disclosureIsMaximized, disclosureIsFocused, disclosureSize,
    } = disclosureState;

    return (componentKeysOverride || disclosureComponentKeys).map((componentKey) => {
      const componentData = disclosureComponentData[componentKey];
      const isFullscreen = disclosureSize === availableDisclosureSizes.FULLSCREEN;
      const popContent = this.generatePopFunction(componentData.key);
      const componentIndex = disclosureComponentKeys.indexOf(componentKey);

      const delegate = {};

      /**
       * The disclose function provided will push content onto the disclosure stack.
       */
      delegate.disclose = (data) => {
        if (trapNestedDisclosureRequests || this.disclosureTypeIsSupported(data.preferredType)) {
          return Promise.resolve()
            .then(() => {
              this.pushDisclosure(data);

              return {
                afterDismiss: new Promise((resolve) => {
                  this.onDismissResolvers[data.content.key] = resolve;
                }),
                dismissDisclosure: this.generatePopFunction(data.content.key),
              };
            });
        }
        return disclosureManager.disclose(data);
      };

      /**
       * Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack,
       * the disclosure is closed.
       */
      delegate.dismiss = componentIndex > 0 ? popContent : this.safelyCloseDisclosure;

      /**
       * Allows a component to close the entire disclosure stack.
       */
      delegate.closeDisclosure = this.safelyCloseDisclosure;

      /**
       * Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is
       * only provided to components in the stack that have a previous sibling.
       */
      delegate.goBack = componentIndex > 0 ? popContent : undefined;

      /**
       * Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap.
       */
      delegate.requestFocus = disclosureIsFocused ? () => Promise.resolve().then(this.releaseDisclosureFocus) : undefined;

      /**
       * Allows a component to release focus from itself and return it to the disclosure.
       */
      delegate.releaseFocus = !disclosureIsFocused ? () => Promise.resolve().then(this.requestDisclosureFocus) : undefined;

      /**
       * Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.
       */
      delegate.maximize = (!isFullscreen && !disclosureIsMaximized) ? () => (Promise.resolve().then(this.maximizeDisclosure)) : undefined;

      /**
       * Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.
       */
      delegate.minimize = (!isFullscreen && disclosureIsMaximized) ? () => (Promise.resolve().then(this.minimizeDisclosure)) : undefined;

      /**
       * Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.
       */
      delegate.registerDismissCheck = (checkFunc) => {
        this.dismissChecks[componentData.key] = checkFunc;

        if (disclosureManager && disclosureManager.registerDismissCheck) {
          // The combination of all managed dismiss checks is registered to the parent app delegate to ensure
          // that all are accounted for by the parent.
          return disclosureManager.registerDismissCheck(() => Promise.all(Object.values(this.dismissChecks)));
        }

        return Promise.resolve();
      };

      return (
        <DisclosureManagerContext.Provider value={DisclosureManagerDelegate.create(delegate)} key={componentData.key}>
          {componentData.component}
        </DisclosureManagerContext.Provider>
      );
    });
  }

  render() {
    const { render } = this.props;
    const {
      childComponents,
      disclosureIsOpen,
      disclosureIsFocused,
      disclosureIsMaximized,
      disclosureSize,
      disclosureDimensions,
      disclosureComponentKeys,
      disclosureComponents,
    } = this.state;

    if (!render) {
      return null;
    }

    return render({
      dismissPresentedComponent: (disclosureComponentKeys.length > 1) ? this.generatePopFunction(disclosureComponentKeys[disclosureComponentKeys.length - 1]) : this.safelyCloseDisclosure,
      closeDisclosure: this.safelyCloseDisclosure,
      children: {
        components: childComponents,
      },
      disclosure: {
        isOpen: disclosureIsOpen,
        isFocused: disclosureIsFocused,
        isMaximized: disclosureIsMaximized,
        size: disclosureSize,
        dimensions: disclosureDimensions,
        components: disclosureComponents,
      },
    });
  }
}

DisclosureManager.propTypes = propTypes;
DisclosureManager.defaultProps = defaultProps;

const disclosureManagerShape = DisclosureManagerDelegate.propType;

export default withDisclosureManager(DisclosureManager);
export { withDisclosureManager, disclosureManagerShape };
