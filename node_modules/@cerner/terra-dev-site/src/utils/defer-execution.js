/**
 * Executes the given function in the next run loop using a standard timeout.
 * Can be useful in the React lifecycle if execution is desired after the
 * current update.
 * @param {Function} action The function to execute.
 * @returns The timeout identifier that can be used to cancel the timeout, if
 * necessary.
 */
function deferExecution(action) {
  return setTimeout(action, 0);
}

export default deferExecution;
