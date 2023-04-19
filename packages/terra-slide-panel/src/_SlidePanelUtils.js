/**
 * Checks if the operating system is MacOS
 * @returns {boolean} - True if the current system is MacOS, False otherwise.
 */
const isMac = () => navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Win') === -1;

/**
 * Checks if the operating system is Windows
 * @returns {boolean} - True if the current system is Windows, False otherwise.
 */
const isWin = () => navigator.userAgent.indexOf('Mac') === -1 && navigator.userAgent.indexOf('Win') !== -1;

const SlidePanelUtils = {
  isMac,
  isWin,
}

export default SlidePanelUtils;
