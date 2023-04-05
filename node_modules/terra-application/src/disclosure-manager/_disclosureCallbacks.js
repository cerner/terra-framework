let disclosureCallbacks = [];

const addCallback = (callback) => {
  disclosureCallbacks = [...disclosureCallbacks, callback];
};

const removeCallback = (callback) => {
  disclosureCallbacks = disclosureCallbacks.filter(disclosureCallback => disclosureCallback !== callback);
};

/**
 * Closes the most recent disclosure for any instance of a terra-application
 * disclosure manager.  This should be used only as a last resort to hook up external events to the disclosure manager
 * functionality.
 * @returns {Promise} A promise that will be resolved once the disclosure is successfully dismissed.
 * If the disclosure is not dismissed the promise will be rejected.  If there is no disclosure available to close,
 * the promise will be resolved.
 */
const closeMostRecentDisclosure = () => {
  if (!disclosureCallbacks.length) {
    return Promise.resolve();
  }

  return disclosureCallbacks[disclosureCallbacks.length - 1]();
};

/**
 * Returns the number of disclosures that are currently being disclosed through any instance of a terra-application
 * disclosure manager.
 * @returns {number} The active disclosure count.
 */
const getActiveDisclosureCount = () => (disclosureCallbacks.length);

export {
  addCallback,
  removeCallback,
  closeMostRecentDisclosure,
  getActiveDisclosureCount,
};
