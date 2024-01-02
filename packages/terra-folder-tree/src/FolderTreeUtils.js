/* eslint-disable no-param-reassign */
const handleMoveFocus = (elementA, elementB) => {
  if (!elementA || !elementB) { return; }
  elementA.tabIndex = -1;

  elementB.tabIndex = 0;
  elementB.focus();
};

const FolderTreeUtils = {
  handleMoveFocus,
};

export default FolderTreeUtils;
