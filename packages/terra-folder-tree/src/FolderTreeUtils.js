/* This function takes in two node refs, element A and B.
 * When used, the tab index of A will be set to -1, and B to 0.
 * Focus is then shifted over to B.
 * This is used for folder tree items so that only the last focused element has a tabIndex of 0.
 */
const handleMoveFocus = (elementA, elementB) => {
  if (!elementA || !elementB) { return; }
  // eslint-disable-next-line no-param-reassign
  elementA.tabIndex = -1;

  // eslint-disable-next-line no-param-reassign
  elementB.tabIndex = 0;
  elementB.focus();
};

const FolderTreeUtils = {
  handleMoveFocus,
};

export default FolderTreeUtils;
