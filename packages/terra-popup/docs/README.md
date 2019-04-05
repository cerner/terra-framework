# Terra Popup

The Terra Popup is higher order component that launches [terra-hookshot][3] positioned content with the ability to display a dynamic arrow.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-popup`

## Usage

### Implementation Notes:

#### Default Open Popups
When attempting to present a popup that is open by default you will need to allow for the target element and/or bounding element to be mounted in order to retrieve the ref for positioning and/or bounding. While this isn't the optimal pattern, as it will force a double render, you can force an update in componentDidMount.
```jsx
class ExampleElementWithPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  componentDidMount() {
    this.forceUpdate();
  }
```

#### Stateless Target Elements
As stateless react elements do not return a ref, but may be desired targets for a popup to attach to, additional code is required to retreive the elements ref. If a ref callback has not been plumbed through in the elements implementation there are a few options:

#### Use a selector to retrieve your ref. The weakness of this option is that you need to ensure your selector is unique, so it's not advisiable in components that are reused on the same page.

```jsx
  const getButtonNode = () => {
    return document.getElementById('my-popup-button');
  }

.
.
.

  render() {
    return (
      <div>
        <Button id="my-popup-button" />
        <Popup
          targetRef={getButtonNode}
```
#### Wrap the element in span or div. The weakness of this option is that you need to ensure the wrapping div fits the content, while still styled correctly on the page.

```jsx
  getButtonNode() {
    return this.buttonNode;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  render() {
    return (
      <div>
        <span ref={this.setButtonNode}>
          <Button />
        </span>
        <Popup
          targetRef={this.getButtonNode}
```

#### Rendering a popup inside a modal
The [Modal Manager][1] component will always trap focus within its presented modal. In order to interact with a popup when rendered inside that modal, the popup must request focus from the ModalManager. The [Disclosure Manager Delegate][2] instance provided by the [Modal Manager][1] includes support for requesting and releasing focus from the [Modal Manager][1]. Therefore, the [Modal Manager][1] must be used when rendering a popup in a modal. When rendering a popup within a [Modal Manager][1] modal, pass in the requestFocus and releaseFocus functions from the [Disclosure Manager Delegate][2] instance to the requestFocus and releaseFocus props on the popup. The [Modal Manager][1] will facilitate requesting and releasing focus when the popup opens and closes.

#### Rendering a popup using automatic sizing
When setting either the contentHeight or contentWidth to 'auto' the popup will layout to the size of the content. If the content is larger than the set bounding area it will be resized to fit the bounding area, and the content will be decorated with the props isHeightBounded/isWidthBounded in order to allow the content to respond to the resized state. Automatic sized popups will reposition if the inner content resizes, though animated size changes are heavily discouraged and not fully supported; as performance is severly impacted even in the best conditions with capable hardware.

[1]: https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/about
[2]: https://engineering.cerner.com/terra-ui/#/components/terra-modal-manager/modal-manager/about
[3]: https://engineering.cerner.com/terra-ui/#/components/terra-hookshot/hookshot/hookshot
