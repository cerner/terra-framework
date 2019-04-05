/**
 * Returns true if the selected tab is not the currently selected index.
 */
const shouldHandleSelection = (currentSelectedKey, newSelectedKey) => newSelectedKey !== currentSelectedKey;

/**
 * Returns the active key if given, else returns the key of the first tab.
 * To be used in the constructor, to set initial state.
 */
const initialSelectedTabKey = (tabs, activeKey) => {
  if (activeKey) {
    return activeKey;
  } if (tabs.length) {
    return tabs[0].key;
  }
  return tabs.key;
};

const TabUtils = {
  shouldHandleSelection,
  initialSelectedTabKey,
};

export default TabUtils;
