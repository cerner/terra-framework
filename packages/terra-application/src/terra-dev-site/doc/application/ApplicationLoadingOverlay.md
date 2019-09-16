# Terra Application

## Application Loading Overlay

The ApplicationLoadingOverlay allows for the presentation of loading overlays within the Terra Application framework.

Mounting an open ApplicationLoadingOverlay will result in the framework rendering a loading overlay. Unmounting the ApplicationLoadingOverlay
(or removing the `isOpen` prop) will subsequently remove the loading overlay.

### ApplicationLoadingOverlayProvider

Loading overlays are positioned within the application by the ApplicationLoadingOverlayProvider component. Any children placed within the
ApplicationLoadingOverlayProvider will be covered by the loading overlay when the loading overlay is active. Any content under an active
loading overlay is not accessible by the user or by assistive technology.

> Note: ApplicationBase renders an ApplicationLoadingOverlayProvider by default, but additional ApplicationLoadingOverlayProvider components
can be used to scope loading overlays to different areas of the application.

### ApplicationLoadingOverlayContext

The ApplicationLoadingOverlayProvider and ApplicationLoadingOverlay communicate with each other using the ApplicationLoadingOverlayContext.

|Property|Description|
|---|---|
|`show(String key, String message)`|A function that will present a loading overlay for the given key. The key should be unique (namespace appropriately). If an overlay is already presented with the same message, no action is performed.|
|`hide(String key)`|A function that will remove the loading overlay for the given key. If no overlay is presented, no action is performed.|

> Note: While the ApplicationLoadingOverlayContext can be used directly, usage of the ApplicationLoadingOverlay is strongly recommended to
ensure that the loading overlays are shown and hidden properly. If used directly, proper cleanup during the component unmount lifecycle must be ensured.

