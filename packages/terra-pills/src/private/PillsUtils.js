const getPillWidth = (pill) => {
  const pillWidth = pill.parentNode.getBoundingClientRect().width;
  return pillWidth;
};

const handleRollUp = (pillListRef) => {
  const rollUpPill = pillListRef.current.querySelector('[data-terra-rollup-pill]');
  const pills = pillListRef.current.querySelectorAll('[data-terra-pill]');
  const containerWidth = Math.ceil(pillListRef.current.clientWidth);
  let totalPillWidth = 0;
  let startIndex = 0;
  let rollupPillWidth = 0;

  if (rollUpPill) {
    rollupPillWidth = getPillWidth(rollUpPill);
  }

  for (let i = 0; i < pills.length; i += 1) {
    if (totalPillWidth >= containerWidth) {
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
  getNextFocusableNode,
  getPreviousFocusableNode,
  setPillsTabIndex,
  setRollUpPillTabIndex,
};

export default PillsUtils;
