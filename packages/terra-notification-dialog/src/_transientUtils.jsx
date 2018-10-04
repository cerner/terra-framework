import React, { createContext } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Base from 'terra-base';

const TransientComponentContext = createContext();

/**
 * Mounts a transient component to the document. The component will be wrapped by a Base component to provide i18n.
 * @param {Component} component The component instance to be mounted.
 * @param {String} containerId An id that will be used to create the element to which the component will be mounted.
 * @param {String} locale The string locale used to load translated messages.
 * @param {Object} customMessages The object containing custom messages for the given locale.
 * @returns {Promise} A Promise is returned. If a component is already mounted for the given id value, the Promise will
 *                    be rejected. Otherwise, the Promise will be resolved after the component has been mounted.
 */
const mount = (component, containerId, locale, customMessages) => {
  /**
   * If an element with the chosen id is already present, the new presentation is aborted.
   */
  if (document.getElementById(containerId)) {
    return Promise.reject();
  }

  const mountElement = document.createElement('div');
  mountElement.id = containerId;
  mountElement.setAttribute('data-terra-transient-component', true);
  document.body.appendChild(mountElement);

  return new Promise((resolve) => {
    render((
      <Base locale={locale} customMessages={customMessages}>
        <TransientComponentContext.Provider
          value={{
            containerId,
          }}
        >
          {component}
        </TransientComponentContext.Provider>
      </Base>
    ),
    mountElement,
    () => {
      /**
       * The Promise is resolved within the render callback.
       */
      resolve();
    });
  });
};

/**
 * Unmounts a currently presented transient component.
 * @param {String} id The id string used to identify the element containing the component.
 * @returns {Promise} A Promise is returned. The Promise will be resolved after the component is unmounted, or the Promise will
 *                    be rejected if the id does match a currently presented transient component.
 */
const unmount = (id) => {
  const mountElement = document.getElementById(id);

  /**
   * If the mount element to be removed cannot be found, the removal is aborted.
   */
  if (!mountElement) {
    return Promise.reject();
  }

  return new Promise((resolve, reject) => {
    if (unmountComponentAtNode(mountElement)) {
      document.body.removeChild(mountElement);
      resolve();
    } else {
      reject();
    }
  });
};

const injectTransientComponent = (Component) => {
  const InjectedComponent = props => (
    <TransientComponentContext.Consumer>
      {transientComponent => <Component {...props} transientComponent={transientComponent} />}
    </TransientComponentContext.Consumer>
  );

  InjectedComponent.displayName = `injectTransientComponent(${Component.displayName})`;

  return InjectedComponent;
};


export default {
  mount,
  unmount,
  injectTransientComponent,
};
