const getViewportSize = require('./getViewportSize');
const MAX_RETRIES = 5;
const setViewportSize = (viewport, retryNo = 0) => {
  const {
    width,
    height
  } = viewport;
  const windowSize = global.browser.getWindowSize();
  const viewportSize = getViewportSize();
  const widthDiff = windowSize.width - viewportSize.width;
  const heightDiff = windowSize.height - viewportSize.height;

  // change window size with indent
  global.browser.setWindowSize(width + widthDiff, height + heightDiff);
  const newViewportSize = getViewportSize();

  // if viewport size is not equal to the desired size, execute process again
  if (retryNo < MAX_RETRIES && (newViewportSize.width !== width || newViewportSize.height !== height)) {
    setViewportSize(viewport, retryNo + 1);
  }
};
module.exports = setViewportSize;