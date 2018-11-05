# Terra Modal Manager - Upgrade Guide

## Upgrading from v2.x to v3.x

With the release of terra-disclosure-manager v3.x, the SlidePanelManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. 

The below example code details the changes necessary to interact with terra-slide-panel-manager v3.x.

```jsx
/**
 * v3.x
 */
import Base from 'terra-base';
import SlidePanelManager from 'terra-slide-panel-manager'; 
import AppDelegate from 'terra-app-delegate';

const MyDisclosureComponent = ({ app }) => (
  <Button
    text="Close Panel"
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
    text="Launch Panel"
    onClick={() => { 
      app.disclose({
        preferredType: 'panel',
        content: {
          key: 'MY-PANEL-DISCLOSURE',
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
    <SlidePanelManager>
      <MyComponent />
    </SlidePanelManager>
  </Base>
)

/**
 * v4.x
 */
import Base from 'terra-base';
import SlidePanelManager from 'terra-slide-panel-manager'; 
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

const MyDisclosureComponent = withDisclosureManager({ disclosureManager }) => (
  <Button
    text="Close Panel"
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
    text="Launch Panel"
    onClick={() => { 
      disclosureManager.disclose({
        preferredType: 'panel',
        content: {
          key: 'MY-PANEL-DISCLOSURE',
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
    <SlidePanelManager>
      <MyComponent />
    </SlidePanelManager>
  </Base>
)
```
