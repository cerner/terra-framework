Next Release
-------------
1.11.0
------
* Create a custom dispatch to override parent.postMessage 

1.10.1
------
* Remove sinon-test as dependency

1.10.0
------
* Add support for wildcard characters in acls urls.

1.9.0
------
* Add custom methods #47
* Add generic options object to App init. #46

1.8.1
------
* Conditionally remove hasAttribute so it doesn't break on non-elements in IE10.  #44

1.8.0
------
* Remove activeACL set by referrer, as it breaks if you have your own URL in the ACL list

1.7.3
------
* Fix verifyChallenge to properly handle and return the Promise.reject scenario. #41

1.7.2
------
* Fix Image resizing for slow loading images by calling on document.

1.7.1
------
* Add Image resizing for slow loading images.

1.7.0
------
* Fix resizing: use scrollHeight instead of offsetHeight

1.6.2
------
* Add classes for provider and consumer.

1.6.1
------
* Added href attribute pattern check before unloading.

1.6.0
------
* Remove frame origin check as it doesn't provide any added security value and makes
  integration more complicated for providing applications.

1.5.1
------
* Added download attribute check for IE11 in unload trigger.

1.5.0
------
* Added support for calculating height of body containing absolute positioned elements.
* Restored default height calculation back to bodyOffset.

1.4.0
------
* Added trigger for frame unloading. #18
* Updated default height calculation to bodyScroll.

1.3.2
------
* Updated default height calculation to max to account for dropdowns.


1.3.1
------
* Updated node version to 8.9.2 to support NPM 2FA


1.3.0
------
* Added the feature to pass in custom attributes for mounted iframe.
* Added support for auto-authorizing the consumer.


1.2.1
------
* Removed message event listeners when unmounting frames.


1.2.0
------
* Added `load` method to frame in consumer.
* Updated consumer's unmount method to avoid potential memory leak.


1.1.0
------
* Removed the need of adding polyfills when consuming xfc.


1.0.2
------
* Updated dependency "mutation-observer" to v1.0.3 or above.


1.0.1
------
* Updated Webpack to v2.


1.0.0
------
* Initial release
