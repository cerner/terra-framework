# Terra Modal Manager - Upgrade Guide

## Upgrading from v3.x to v4.x

With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. 

The below example code details the changes necessary to interact with terra-modal-manager v4.x.

```jsx
/**
 * v3.x
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
 * v4.x
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
