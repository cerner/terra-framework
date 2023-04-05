/**
  * Pulls the css file path from the file content passed in by a loader
  * @param {string} content - The file content passed in from the loader
  * @returns {string} fileName - The path of the first imported css file
*/
const findCssFileName = (content) => {
  /** The regex picks out lines that don't contain // but do contain some form of quotation (' or "),
  * and an explicit .css or .scss declaration
  */
  const regex = /^(?!\/\/|\/).*["'](.*\.css|.*\.scss)["']/m;
  const processedContent = regex.exec(content);
  const matchIndex = 1;

  if (processedContent && processedContent.length > 0) {
    return processedContent[matchIndex];
  }
  return undefined;
};

module.exports = findCssFileName;
