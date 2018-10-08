# Terra SlidePanel Manager

The SlidePanelManager is a DisclosureManager implementation that presents disclosed content using a SlidePanel.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-slide-panel-manager`

## Usage

### Implementation Requirements

The SlidePanelManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the SlidePanelManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

The SlidePanelManager responds to the `"panel"` disclosure type. Components that wish to disclose content using the SlidePanelManager should provide a preferred type of `"panel"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](http://engineering.cerner.com/terra-framework/#/site/components/disclosure-manager/index) for a full description of the SlidePanelManager's capabilities.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
