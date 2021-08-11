const getPillWidth = (pill) => {
  const pillStyles = window.getComputedStyle(pill);
  const pillWidth = pill.offsetWidth + Math.round(parseFloat(pillStyles.marginLeft)) + Math.round(parseFloat(pillStyles.marginRight));
  return pillWidth;
};

const handleRollUp = (pillListRef) => {
  const rollUpPill = pillListRef.current.querySelector('[data-terra-rollup-pill]');
  const containerWidth = pillListRef.current.clientWidth;
  let rollupPillWidth;
  if (rollUpPill) {
    rollupPillWidth = getPillWidth(rollUpPill);
  }

  let totalPillWidth = 0;
  let startIndex = 0;

  const pills = pillListRef.current.querySelectorAll('[data-terra-pill]');

  for (let i = 0; i < pills.length; i += 1) {
    if (totalPillWidth > containerWidth) {
      break;
    }
    const pillWidth = getPillWidth(pills[i]);
    if (pillWidth + totalPillWidth < containerWidth) {
      startIndex = i + 1;
    } else if (rollupPillWidth + totalPillWidth > containerWidth) {
      startIndex -= 1;
    }
    totalPillWidth += pillWidth;
  }

  return startIndex;
};

const getFirstFocusableNode = (pills) => {
  let firstIndex = -1;
  if (pills.length > 0) {
    for (let i = 0; i < pills.length; i += 1) {
      if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('aria-haspopup'))) {
        firstIndex = i;
        break;
      }
    }
  }

  return firstIndex;
};

const getNextFocusableNode = (pills, currentIndex) => {
  let nextIndex = -1;
  if (pills.length > 0) {
    for (let i = currentIndex; i < pills.length; i += 1) {
      if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('aria-haspopup'))) {
        nextIndex = i;
        break;
      }
    }
  }
  return nextIndex;
};

const getPreviousFocusableNode = (pills, currentIndex) => {
  let previousIndex = -1;
  if (pills.length > 0) {
    for (let i = currentIndex; i >= 0; i -= 1) {
      if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('aria-haspopup'))) {
        previousIndex = i;
        break;
      }
    }
  }
  return previousIndex;
};

const setPillsTabIndex = (pills, val) => {
  for (let i = 0; i < pills.length; i += 1) {
    pills[i].setAttribute('tabindex', val);
  }
};

const setRollUpPillTabIndex = (pill, val) => {
  pill.setAttribute('tabindex', val);
};

const PillsUtils = {
  handleRollUp,
  getFirstFocusableNode,
  getNextFocusableNode,
  getPreviousFocusableNode,
  setPillsTabIndex,
  setRollUpPillTabIndex,
};

export default PillsUtils;
