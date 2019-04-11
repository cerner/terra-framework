# Testing Embedded Content

The Embedded Content Provider Test Template is a test template component which should be used to verify that the provided content does indeed resize and behave as expected when embedded in an terra-embedded-content-consumer XFC Consumer iframe. 

By default, when the embedded-content-consumer provides the iframe with the url of the embedded content, it will resize the iframe's height to be the height of the content supplied in the url. This resize logic, however, does not recognize height 100% and will continoulsy re-trigger resize events until the iframe collapes with a height of zero if the root style sets height to 100%. 

This test template provides the styles needed to correctly set the iframed container's height to the actual height of the provided content when the XFC's default height resizing logic is triggered.
