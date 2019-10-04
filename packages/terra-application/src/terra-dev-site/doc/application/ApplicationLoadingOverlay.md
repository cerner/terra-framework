# Terra Application

## Application Loading Overlay

The ApplicationLoadingOverlay allows for the presentation of loading overlays within the Terra Application framework.

Mounting an open ApplicationLoadingOverlay will result in the framework rendering a loading overlay. Unmounting the ApplicationLoadingOverlay (or removing the `isOpen` prop) will subsequently remove the loading overlay.

### ApplicationLoadingOverlay Props

|Prop Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**isOpen**|bool|optional|**false**|A boolean value indicating whether the loading overlay should be visible or not.|
|**backgroundStyle**|One of: `dark`, `light`, `clear`|optional|**`clear`**|A string indicating the background style for the overlay.|

## ApplicationLoadingOverlayProvider

Loading overlays are positioned within the application by the ApplicationLoadingOverlayProvider component. Any children placed within the ApplicationLoadingOverlayProvider will be covered by the loading overlay when the loading overlay is active. Any content under an active loading overlay is not accessible by the user or by assistive technology.

The ApplicationLoadingOverlay will honor the `backgroundStyle` specified by the ApplicationLoadingOverlay. If multiple `backgroundStyle` values are requested by the active overlays, the strongest requested overlay style will be used.

### ApplicationLoadingOverlayProvider Props

|Prop Name|Type|Is Required|Default Value|Description|
|---|---|---|---|---|
|**children**|node|optional|**undefined**|Components to be rendered within the context of the ApplicationLoadingOverlayProvider. Components rendered here are able to interact with ApplicationLoadingOverlayProvider through the ApplicationLoadingOverlayContext.|
|**scrollRefCallback**|func|optional|**undefined**|A function to be called with the current ref of the scrollable element rendered within the ApplicationLoadingOverlayProvider.|

> Note: ApplicationBase renders an ApplicationLoadingOverlayProvider by default, but additional ApplicationLoadingOverlayProvider components can be used to scope loading overlays to different areas of the application.

## ApplicationLoadingOverlayContext

The ApplicationLoadingOverlayProvider and ApplicationLoadingOverlay communicate with each other using the ApplicationLoadingOverlayContext.

### ApplicationLoadingOverlayContext Value Properties

|Property|Description|
|---|---|
|`show(String key, Object data)`|A function that will present a loading overlay for the given key. The key should be unique (namespace appropriately). If an overlay is already presented with the same message, no action is performed. The data parameter contains configuration data for the overlay. Supported keys include: `backgroundStyle`.|
|`hide(String key)`|A function that will remove the loading overlay for the given key. If no overlay is presented, no action is performed.|

> Note: While the ApplicationLoadingOverlayContext can be used directly, usage of the ApplicationLoadingOverlay is strongly recommended to ensure that the loading overlays are shown and hidden properly. When using the ApplicationLoadingOverlayContext directly, removal of loading overlays (using `hide`) during unmount lifecycles must be ensured.
