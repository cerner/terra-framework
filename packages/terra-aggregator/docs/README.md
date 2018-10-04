# Terra Aggregator

The Aggregator provides focus-based mechanisms for managing actions across disparate components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-aggregator`

## Usage

### Aggregator Focus

The Aggregator manages interactions across its items using focus. Only one item can have focus at any given time. When an item requests focus, it can provide an Object containing state pertaining to the focus request. This state will be managed by the Aggregator and given to the item as a prop on the next render cycle. What goes inside this Object is up to the item. However, this Object will be destroyed when the item loses focus, so the data included should be scoped to things tied directly to a focused state.

Once an item receives focus, the item will be provided with the 'disclose' function that the Aggregator was provided with. The Aggregator wraps that disclose function and ensures that the disclosure lifecycle is tied to the focus management. If the disclosure is closed, focus will be released from the disclosing component. If the disclosing component loses focus for whatever reason, the Aggregator will ensure that the disclosure is closed. Any DisclosureManager-based disclosure implementation is supported.

The components rendered by the Aggregator are provided with an `aggregatorDelegate` prop for interacting with Aggregator state.

`aggregatorDelegate` API:

|Key|Description|
|---|---|
|hasFocus|A Boolean indicating whether or not the item currently has focus.|
|requestFocus|A function that will attempt to give focus to the calling item.|
|releaseFocus|A function that will release focus from the calling item. This is only provided if the item currently has focus.|
|itemState|An Object containing state that was given to the Aggregator during the focus request.|

### Rendering

By default, the components will be rendered by the Aggregator in the order given. An optional `render` prop can be provided that will override the default render logic.

`render` Argument Object API:

|Key|Description|
|---|---|
|`items`|An Array of components that were provided to the Aggregator as `items`, now containing an `aggregatorDelegate` prop. The order of this array matches that of the `items` prop value of the Aggregator.|

#### Rendering Example (using Grid)

```jsx
<Aggregator
  items={[{ key: '1', component: <Item1 /> }, { key: '2', component: <Item2 /> }]}
  render={renderData => (
    <Grid>
      <Grid.Row>
        <Grid.Column col={6}>
          {renderData.items[0]} // This component is equivalent to: <Item1 key="1" aggregatorDelegate={...} />
        </Grid.Column>
        <Grid.Column col={6}>
          {renderData.items[1]} // This component is equivalent to: <Item2 key="2" aggregatorDelegate={...} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )}
/>
```

### Example

```jsx
import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import Aggregator from '../../src/Aggregator';
import SlidePanelManager, { disclosureType } from 'terra-slide-panel-manager';

const DisclosureComponent = ({ app }) => (
  <div>
    <Button text="Dismiss" onClick={() => { app.dismiss(); }} />
  </div>
);

const Section = ({ aggregatorDelegate }) => (
  <div>
    {aggregatorDelegate.hasFocus ? <p>Section has focus</p> : null}
    <Button
      text={aggregatorDelegate.hasFocus ? 'Release Focus' : 'Request Focus'}
      onClick={() => {
        if (aggregatorDelegate.hasFocus) {
          aggregatorDelegate.releaseFocus();
        } else {
          aggregatorDelegate.requestFocus({})
            .then(({ disclose }) => {
              disclose({
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: 'my-disclosure-component',
                  component: <DisclosureComponent />,
                },
              });
            });
        }
      }}
    />
  </div>
);

const aggregatorItems = [{
  key: 'Section 1',
  component: <Section />,
}, {
  key: 'Section 2',
  component: <Section />,
}, {
  key: 'Section 3',
  component: <Section />,
}];

const MyAggregator = ({ app }) => (
  <Aggregator
    items={aggregatorItems}
    disclose={app.disclose}
  />
);

const MyApp = () => (
  <Base>
    <SlidePanelManager>
      <MyAggregator />
    </SlidePanelManager>
  </Base>
);

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
