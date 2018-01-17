const getTopFromTopDown = (scrollItems, index, validTop) => {
  const lastHidden = { index: -1, height: -1 };
  for (let i = index; i < scrollItems.length; i += 1) {
    const item = scrollItems[i];
    if (item.offsetTop + item.height <= validTop) {
      lastHidden.index = i;
      lastHidden.height = item.offsetTop + item.height;
    } else {
      break;
    }
  }
  return lastHidden;
};

const getTopFromBottomUp = (scrollItems, index, validTop) => {
  const nextHidden = { index: -1, height: -1 };
  for (let i = index; i >= 0; i -= 1) {
    const item = scrollItems[i];
    if (item.offsetTop + item.height <= validTop) {
      nextHidden.index = i;
      nextHidden.height = item.offsetTop + item.height;
      break;
    }
  }
  return nextHidden;
};

const getBottomFromTopDown = (scrollItems, index, validBottom) => {
  const nextHidden = { index: -1, height: -1 };
  const finalItem = scrollItems[scrollItems.length - 1];
  for (let i = index; i < scrollItems.length; i += 1) {
    const item = scrollItems[i];
    if (item.offsetTop >= validBottom) {
      nextHidden.index = i;
      nextHidden.height = (finalItem.offsetTop + finalItem.height) - item.offsetTop;
      break;
    }
  }
  return nextHidden;
};

const getBottomFromBottomUp = (scrollItems, index, validBottom) => {
  const lastHidden = { index: -1, height: -1 };
  const finalItem = scrollItems[scrollItems.length - 1];
  for (let i = index; i >= 0; i -= 1) {
    const item = scrollItems[i];
    if (item.offsetTop >= validBottom) {
      lastHidden.index = i;
      lastHidden.height = (finalItem.offsetTop + finalItem.height) - item.offsetTop;
    } else {
      break;
    }
  }
  return lastHidden;
};

const getHiddenItems = (scrollItems, contentData, previousTopIndex, previousBottomIndex) => {
  const validTop = contentData.validTop;
  const validBottom = contentData.validBottom;
  const scrollHeight = contentData.scrollHeight;
  let topHiddenItem;
  if (validTop > 0) {
    let nextIndex = previousTopIndex;
    if (nextIndex < 0) {
      nextIndex = 0;
    }

    const topItem = scrollItems[nextIndex];
    if (topItem.offsetTop + topItem.height <= validTop) {
      topHiddenItem = getTopFromTopDown(scrollItems, nextIndex, validTop);
    } else {
      topHiddenItem = getTopFromBottomUp(scrollItems, nextIndex, validTop);
    }
  } else {
    topHiddenItem = { index: -1, height: -1 };
  }

  let bottomHiddenItem;
  if (scrollHeight - validBottom > 0) {
    let nextIndex = previousBottomIndex;
    if (nextIndex < 0) {
      nextIndex = 0;
    }

    const bottomItem = scrollItems[nextIndex];
    if (bottomItem.offsetTop >= validBottom) {
      bottomHiddenItem = getBottomFromBottomUp(scrollItems, nextIndex, validBottom);
    } else {
      bottomHiddenItem = getBottomFromTopDown(scrollItems, nextIndex, validBottom);
    }
  } else {
    bottomHiddenItem = { index: -1, height: -1 };
  }

  return { topHiddenItem, bottomHiddenItem };
};

const getContentData = (contentNode) => {
  const scrollTop = contentNode.scrollTop;
  const scrollHeight = contentNode.scrollHeight;
  const clientHeight = contentNode.clientHeight;
  return {
    scrollTop,
    scrollHeight,
    clientHeight,
    validTop: scrollTop - (0.5 * clientHeight),
    validBottom: scrollTop + (1.5 * clientHeight),
  };
};

const shouldTriggerItemRequest = contentData => contentData.scrollHeight - (contentData.scrollTop + contentData.clientHeight) < contentData.clientHeight;

const getVisibleScrollGroups = (scrollGroups, childrenArray, topIndex, bottomIndex, wrapperFunction, previousCount) => {
  if (!childrenArray.length) {
    return null;
  }
  let noTopIndex = false;
  let validTopIndex = topIndex;
  if (validTopIndex < 0) {
    validTopIndex = -1;
    noTopIndex = true;
  }
  let noBottomIndex = false;
  let validBottomIndex = bottomIndex;
  if (validBottomIndex < 0) {
    validBottomIndex = scrollGroups.length;
    noBottomIndex = true;
  }

  const visibleChildren = [];
  if (!noTopIndex || !noBottomIndex) {
    for (let i = validTopIndex + 1; i < validBottomIndex; i += 1) {
      const scrollGroup = scrollGroups[i].items;
      const scrollGroupLength = scrollGroup.length;
      for (let j = 0; j < scrollGroupLength; j += 1) {
        const itemIndex = scrollGroup[j];
        visibleChildren.push(wrapperFunction(childrenArray[itemIndex], itemIndex, true));
      }
    }
    return visibleChildren;
  }
  for (let i = 0; i < previousCount; i += 1) {
    visibleChildren.push(wrapperFunction(childrenArray[i], i, true));
  }
  return visibleChildren;
};

const getNewScrollGroups = (lastCount, childrenArray, wrapperFunction) => {
  const newChildren = [];
  for (let i = lastCount; i < childrenArray.length; i += 1) {
    newChildren.push(wrapperFunction(childrenArray[i], i, true));
  }
  return newChildren;
};

const ScrollUtils = {
  getHiddenItems,
  getContentData,
  getNewScrollGroups,
  getVisibleScrollGroups,
  shouldTriggerItemRequest,
};

export default ScrollUtils;
