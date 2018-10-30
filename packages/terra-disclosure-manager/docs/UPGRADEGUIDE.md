# Terra Disclosure Manager

## Upgrade Guide

Versions 2.x of the DisclosureManager utilize prop injection to provide child components with functions used to change the DisclosureManager state. With versions 3.x, the DisclosureManager uses React's Context API instead of prop injection to provide those functions. Components that interact with a DisclosureManager (or one of Terra's provided implementations, ModalManager or SlidePanelManager) must be updated to continue getting access to the DisclosureManager APIs.

Components today that receive an `app` prop from a DisclosureManager will need to use the `withDisclosureManager()` higher order component generator to interface with the DisclosureManager's context. Instead of a prop named `app`, components wrapped with `withDisclosureManager()` will receive a prop named `disclosureManager`. 

The `disclosureManager` prop is equivalent to the previous `app` prop; it has just been renamed to better unify the consumer-facing API conventions with the DisclosureManager itself. As a result of this renaming, the `terra-app-delegate` package has been deprecated and is no longer used. The `disclosureManagerShape` object can be imported from the `terra-disclosure-manager` package instead for use in other propType declarations.

With prop injection, the `app` prop was only provided to immediate children of the DisclosureManager. However, by using context, the `disclosureManager` value will be exposed to any children of the DisclosureManager that are wrapped with `withDisclosureManager()`. Components that are currently passing an `app` prop around to their own child components should be able to remove that logic and have those subsequent children interface with the context directly.

The below example shows contrasting v2.x and v3.x implementations of components that interact with a DisclosureManager (in this case, a ModalManager).

```jsx
/**
 * v2.x
 */
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager'; 
import AppDelegate from 'terra-app-delegate';

const MyDisclosureComponent = ({ app }) => (
  <Button
    text="Close Modal"
    onClick={() => { 
      app.closeDisclosure();
    }}
  />
);
MyDisclosureComponent.propType = {
  app: AppDelegate.propType,
}

const MyComponent = ({ app }) => (
  <Button
    text="Launch Modal"
    onClick={() => { 
      app.disclose({
        preferredType: 'modal',
        content: {
          key: 'MY-MODAL-DISCLOSURE',
          component: <MyDisclosureComponent />,
        }
      });
    }}
  />
);
MyComponent.propType = {
  app: AppDelegate.propType,
}

const MyApp = () => (
  <Base locale="en">
    <ModalManager>
      <MyComponent />
    </ModalManager>
  </Base>
)

/**
 * v3.x
 */
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager'; 
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

const MyDisclosureComponent = withDisclosureManager({ disclosureManager }) => (
  <Button
    text="Close Modal"
    onClick={() => { 
      disclosureManager.closeDisclosure();
    }}
  />
);
MyDisclosureComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

const MyComponent = withDisclosureManager({ disclosureManager }) => (
  <Button
    text="Launch Modal"
    onClick={() => { 
      disclosureManager.disclose({
        preferredType: 'modal',
        content: {
          key: 'MY-MODAL-DISCLOSURE',
          component: <MyDisclosureComponent />,
        }
      });
    }}
  />
);
MyComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

const MyApp = () => (
  <Base locale="en">
    <ModalManager>
      <MyComponent />
    </ModalManager>
  </Base>
)
```
