/**
 * Gets the viewport size of the current browser window.
 * @return {Object} - viewport width and height of the current browser window.
 */
const getViewportSize = () => {
  // eslint-disable-next-line prefer-arrow-callback
  const resolution = global.browser.execute(function getResolution() {
    return {
      screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      screenHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
  });
  return {
    width: resolution.screenWidth,
    height: resolution.screenHeight
  };
};
module.exports = getViewportSize;