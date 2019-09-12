import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import {
  DisclosureManagerDelegate, DisclosureManagerContext, DisclosureManagerHeaderAdapterContext,
} from '../disclosure-manager';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import ApplicationErrorBoundary from '../application-error-boundary/ApplicationErrorBoundary';

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
const availableDisclosureWidths = [320, 480, 560, 640, 800, 960, 1120, 1280, 1440, 1600, 1760, 1920].reduce(arrayReducer, {});

const logWarning = (message) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-console */
    console.warn(message);
    /* eslint-enable no-console */
  }
};

const validateSize = (size) => {
  if (typeof size === 'object') {
    if (availableDisclosureHeights[size.height] && availableDisclosureWidths[size.width]) {
      return size;
    }
  } else if (typeof size === 'string') {
    if (availableDisclosureSizes[size.toUpperCase()]) {
      return size;
    }
  }

  logWarning(`DisclosureManager: Invalid size provided - ${size}. The default size will be used instead.`);
  return availableDisclosureSizes.SMALL;
};

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
   * An Object (or a function that returns an Object) that defines the strings presented to the user by the DisclosureManager's NavigationPromptCheckpoints.
   */
  navigationPromptOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    rejectButtonText: PropTypes.string,
    acceptButtonText: PropTypes.string,
    emphasizedAction: PropTypes.oneOf(['accept', 'reject']),
  })]).isRequired,
};

class OrionDisclosureManager extends React.Component {
  constructor(props) {
    super(props);

    this.generateChildComponentDelegate = this.generateChildComponentDelegate.bind(this);
    this.generateDisclosureComponentDelegate = this.generateDisclosureComponentDelegate.bind(this);

    this.generatePopFunction = this.generatePopFunction.bind(this);
    this.buildPublicDisclosureComponentObject = this.buildPublicDisclosureComponentObject.bind(this);
    this.buildStateForDisclosureComponent = this.buildStateForDisclosureComponent.bind(this);

    this.pushDisclosure = this.pushDisclosure.bind(this);
    this.popDisclosure = this.popDisclosure.bind(this);

    this.state = {
      childComponentDelegate: this.generateChildComponentDelegate(),
      disclosureComponentKey: undefined,
      disclosureComponentData: undefined,
    };
  }

  generateChildComponentDelegate() {
    return DisclosureManagerDelegate.create({
      disclose: (data) => {
        /**
         * If the disclosure is already open, a component must have been disclosed already.
         * Another disclosure cannot be presented until the previous disclosure is dismissed,
         * so the request is rejected.
         */

        if (this.state.disclosureComponentKey) {
          logWarning('DisclosureManager: Existing disclosure must be dismissed before presenting a new disclosure.');
          return Promise.reject();
        }

        /**
         * If the component is missing from the disclose request, the disclosure stack is not manipulated
         * and the request is rejected.
         */
        if (!data.component) {
          logWarning('DisclosureManager: Disclosure request without component was ignored.');
          return Promise.reject();
        }

        const disclosedContentKey = uuidv4();

        return new Promise((resolve) => {
          this.pushDisclosure(data, disclosedContentKey, () => {
            resolve({
              dismissDisclosure: this.generatePopFunction(disclosedContentKey, { unsafe: true }),
            });
          });
        });
      },
    });
  }

  generateDisclosureComponentDelegate() {
    const delegate = {};

    /**
     * Allows a component to update its currently presented size.
     */
    delegate.setSize = size => new Promise((resolve) => {
      this.setState(state => ({
        disclosureComponentData: Object.assign({}, state.disclosureComponentData, {
          size: validateSize(size),
        }),
      }), resolve);
    });

    return DisclosureManagerDelegate.create(delegate);
  }

  buildStateForDisclosureComponent(data, key) {
    return {
      key,
      component: data.component,
      size: validateSize(data.size),
      onDismiss: data.onDismiss,
      checkpointRef: React.createRef(),
      delegateValue: this.generateDisclosureComponentDelegate(key),
      headerAdapterContextValue: {
        register: ({ title, collapsibleMenuView }) => {
          this.setState(state => ({
            disclosureComponentData: {
              ...state.disclosureComponentData,
              headerAdapterData: { title, collapsibleMenuView },
            },
          }));
        },
      },
      headerAdapterData: undefined,
    };
  }

  pushDisclosure(data, key, callback) {
    const newState = {};

    newState.disclosureComponentKey = key;
    newState.disclosureComponentData = this.buildStateForDisclosureComponent(data, key);

    this.setState(newState, callback);
  }

  popDisclosure(callback) {
    const newState = {};

    newState.disclosureComponentKey = undefined;
    newState.disclosureComponentData = undefined;

    this.setState(newState, callback);
  }

  /**
   * Creates an instance of a pop function for the component represented by the given key.
   */
  generatePopFunction(key, options = {}) {
    return () => {
      const { disclosureComponentData } = this.state;

      return new Promise((resolve, reject) => {
        if (options.unsafe) {
          this.popDisclosure(resolve);
        } else {
          disclosureComponentData.checkpointRef.current.resolvePrompts(this.props.navigationPromptOptions).then(() => {
            this.popDisclosure(resolve);
          }).catch(reject);
        }
      }).then(() => {
        if (disclosureComponentData.onDismiss && !options.unsafe) {
          disclosureComponentData.onDismiss(); // TODO think about whether this should be executed on every dismissal or only when closed by modal itself? Should this be onModalDismiss?
        }
      });
    };
  }

  buildPublicDisclosureComponentObject() {
    // const { navigationPromptCheckpointComponent } = this.props;
    const {
      disclosureComponentKey,
      disclosureComponentData,
    } = this.state;

    if (!disclosureComponentData) {
      return undefined;
    }

    return {
      component: (
        <DisclosureManagerHeaderAdapterContext.Provider value={disclosureComponentData.headerAdapterContextValue} key={disclosureComponentKey}>
          <DisclosureManagerContext.Provider value={disclosureComponentData.delegateValue} key={disclosureComponentKey}>
            <NavigationPromptCheckpoint ref={disclosureComponentData.checkpointRef} key={disclosureComponentKey}>
              <ApplicationErrorBoundary>
                {disclosureComponentData.component}
              </ApplicationErrorBoundary>
            </NavigationPromptCheckpoint>
          </DisclosureManagerContext.Provider>
        </DisclosureManagerHeaderAdapterContext.Provider>
      ),
      size: disclosureComponentData.size,
      headerAdapter: disclosureComponentData.headerAdapterData,
    };
  }

  render() {
    const { render, children } = this.props;
    const {
      childComponentDelegate,
      disclosureComponentKey,
    } = this.state;

    if (!render) {
      return null;
    }

    return render({
      disclosureComponentKey,
      disclosureComponentData: this.buildPublicDisclosureComponentObject(),
      wrappedChildren: (
        <DisclosureManagerContext.Provider value={childComponentDelegate}>
          {children}
        </DisclosureManagerContext.Provider>
      ),
      popDisclosureStack: this.generatePopFunction(disclosureComponentKey || undefined),
    });
  }
}

OrionDisclosureManager.propTypes = propTypes;

const disclosureManagerShape = DisclosureManagerDelegate.propType;

export default OrionDisclosureManager;
export {
  disclosureManagerShape,
};
