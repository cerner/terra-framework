import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';

const availableDisclosureSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  FULLSCREEN: 'fullscreen',
};

export { availableDisclosureSizes };

const propTypes = {
  /**
   * An AppDelegate instance that will be integrated with the DisclosureManager instance. The DisclosureManager will defer to it if unsupported
   * actions occur.
   */
  app: AppDelegate.propType,
  /**
   * The child components that will be provided with an AppDelegate 'app' prop used to interact with the DisclosureManager instance.
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
      disclosureIsOpen: false,
      disclosureIsFocused: true,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
    };
  }

  /**
   * Determines if the provided disclosure type is supported by the DisclosureManager.
   * @return `true` if the type is supported or if there is no fallback `app` present. `false` is returned otherwise.
   */
  disclosureTypeIsSupported(type) {
    const { app, supportedDisclosureTypes } = this.props;

    return supportedDisclosureTypes.indexOf(type) >= 0 || !app;
  }

  openDisclosure(data) {
    this.setState({
      disclosureIsOpen: true,
      disclosureIsFocused: true,
      disclosureSize: data.size || availableDisclosureSizes.SMALL,
      disclosureComponentKeys: [data.content.key],
      disclosureComponentData: {
        [data.content.key]: {
          key: data.content.key,
          name: data.content.name,
          props: data.content.props,
          component: data.content.component,
        },
      },
    });
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

    this.setState(newState);
  }

  popDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    newState.disclosureComponentData[newState.disclosureComponentKeys.pop()] = undefined;

    this.setState(newState);
  }

  closeDisclosure() {
    this.setState({
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
    });
  }

  requestDisclosureFocus() {
    this.setState({
      disclosureIsFocused: true,
    });
  }

  releaseDisclosureFocus() {
    this.setState({
      disclosureIsFocused: false,
    });
  }

  maximizeDisclosure() {
    this.setState({
      disclosureIsMaximized: true,
    });
  }

  minimizeDisclosure() {
    this.setState({
      disclosureIsMaximized: false,
    });
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

  renderContentComponents() {
    const { children, app } = this.props;

    const appDelegate = {};

    /**
     * The disclose function provided will open the disclosure with the provided content.
     */
    appDelegate.disclose = (data) => {
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
      return app.disclose(data);
    };

    return React.Children.map(children, child => React.cloneElement(child, {
      app: AppDelegate.clone(app, appDelegate),
    }));
  }

  renderDisclosureComponents() {
    const { app } = this.props;
    const { disclosureComponentKeys, disclosureComponentData, disclosureIsMaximized, disclosureIsFocused, disclosureSize } = this.state;

    return disclosureComponentKeys.map((componentKey, index) => {
      const componentData = disclosureComponentData[componentKey];
      const isFullscreen = disclosureSize === availableDisclosureSizes.FULLSCREEN;
      const popContent = this.generatePopFunction(componentData.key);

      const disclosureApp = {};

      /**
       * The disclose function provided will push content onto the disclosure stack.
       */
      disclosureApp.disclose = (data) => {
        if (this.disclosureTypeIsSupported(data.preferredType)) {
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
        return app.disclose(data);
      };

      /**
       * Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack,
       * the disclosure is closed.
       */
      disclosureApp.dismiss = index > 0 ? popContent : this.safelyCloseDisclosure;

      /**
       * Allows a component to close the entire disclosure stack.
       */
      disclosureApp.closeDisclosure = this.safelyCloseDisclosure;

      /**
       * Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is
       * only provided to components in the stack that have a previous sibling.
       */
      disclosureApp.goBack = index > 0 ? popContent : undefined;

      /**
       * Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap.
       */
      disclosureApp.requestFocus = disclosureIsFocused ? () => Promise.resolve().then(this.releaseDisclosureFocus) : undefined;

      /**
       * Allows a component to release focus from itself and return it to the disclosure.
       */
      disclosureApp.releaseFocus = !disclosureIsFocused ? () => Promise.resolve().then(this.requestDisclosureFocus) : undefined;

      /**
       * Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.
       */
      disclosureApp.maximize = (!isFullscreen && !disclosureIsMaximized) ? () => (Promise.resolve().then(this.maximizeDisclosure)) : undefined;

      /**
       * Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.
       */
      disclosureApp.minimize = (!isFullscreen && disclosureIsMaximized) ? () => (Promise.resolve().then(this.minimizeDisclosure)) : undefined;

      /**
       * Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.
       */
      disclosureApp.registerDismissCheck = (checkFunc) => {
        this.dismissChecks[componentData.key] = checkFunc;

        if (app && app.registerDismissCheck) {
          // The combination of all managed dismiss checks is registered to the parent app delegate to ensure
          // that all are accounted for by the parent.
          return app.registerDismissCheck(() => Promise.all(Object.values(this.dismissChecks)));
        }

        return Promise.resolve();
      };

      if (componentData.component) {
        return React.cloneElement(componentData.component, {
          key: componentData.key,
          app: AppDelegate.create(disclosureApp),
        });
      }

      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);
      if (!ComponentClass) {
        return undefined;
      }

      return <ComponentClass key={componentData.key} {...componentData.props} app={AppDelegate.create(disclosureApp)} />;
    });
  }

  render() {
    const { render } = this.props;
    const { disclosureIsOpen, disclosureIsFocused, disclosureIsMaximized, disclosureSize, disclosureComponentKeys } = this.state;

    if (!render) {
      return null;
    }

    return render({
      dismissPresentedComponent: (disclosureComponentKeys.length > 1) ? this.generatePopFunction(disclosureComponentKeys[disclosureComponentKeys.length - 1]) : this.safelyCloseDisclosure,
      closeDisclosure: this.safelyCloseDisclosure,
      children: {
        components: this.renderContentComponents(),
      },
      disclosure: {
        isOpen: disclosureIsOpen,
        isFocused: disclosureIsFocused,
        isMaximized: disclosureIsMaximized,
        size: disclosureSize,
        components: this.renderDisclosureComponents(),
      },
    });
  }
}

DisclosureManager.propTypes = propTypes;
DisclosureManager.defaultProps = defaultProps;

export default DisclosureManager;
