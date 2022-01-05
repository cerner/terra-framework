/**
 * Transform the messages extracted[1] by formatjs into something terra-aggregate-translations understands.
 *
 * Use this formatter as part of the extract command so we can bridge between our ancient react-intl v2.x and the
 * superior inline message extraction of current react-intl, without having to upgrade terra-framework to be on the
 * latest react-intl first.
 *
 * Advantages:
 * - Developers can now write messages inline with the code. Less files to manage. Gets us into the habit while we wait
 * for the eventual react-intl upgrade.
 * - Translators can review helpful metadata, such as a description string for translators, in the inline messages.
 * - No more copy/pasting IDs from a .json into code - less mistakes that way.
 *
 * Disadvantages:
 * - Slightly longer `npm run` time due to the extra formatjs extraction command.
 * - We still have to specify IDs of each message :( for now.
 * - The metadata of the messages is not automatically given to the translation tools - it is only in the source code.
 * @param {Object} msgs The messages that were extracted by formatjs.
 * @returns {Object} A shallow key/message object as required by terra-aggregate-translations.
 */
exports.format = (msgs) => {
  const results = {};
  // eslint-disable-next-line no-restricted-syntax
  Object.entries(msgs).forEach(
    ([id, msg]) => { results[id] = msg.defaultMessage; },
  );
  return results;
};
