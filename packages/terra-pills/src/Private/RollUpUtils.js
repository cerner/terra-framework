const getPillWidth = (pill) => {
  const pillStyles = window.getComputedStyle(pill);
  const pillWidth = pill.offsetWidth + Math.round(parseFloat(pillStyles.marginLeft)) + Math.round(parseFloat(pillStyles.marginRight));
  return pillWidth;
};

const handleRollUp = (pillListRef) => {
  const rollUpPill = pillListRef.current.querySelector('[data-terra-rollup-pill]');
  const containerWidth = pillListRef.current.getBoundingClientRect().width;
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
      startIndex += 1;
    } else if (rollupPillWidth + totalPillWidth > containerWidth) {
      startIndex -= 1;
    }
    totalPillWidth += pillWidth;
  }

  return startIndex;
};

const getFirstFocusableNode = (pills) => {
  let firstIndex;
  for (let i = 0; i < pills.length; i += 1) {
    if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('data-terra-rollup-pill')) || (pills[i].hasAttribute('aria-haspopup'))) {
      firstIndex = i;
      break;
    }
  }
  return firstIndex;
};

const getNextFocusableNode = (pills, currentIndex) => {
  let nextIndex;
  for (let i = currentIndex + 1; i < pills.length; i += 1) {
    if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('data-terra-rollup-pill')) || (pills[i].hasAttribute('aria-haspopup'))) {
      nextIndex = i;
      break;
    }
    nextIndex = currentIndex;
  }
  return nextIndex;
};

const getPreviousFocusableNode = (pills, index) => {
  let previousIndex;
  for (let i = index - 1; i >= 0; i -= 1) {
    if ((pills[i].hasAttribute('data-terra-pill-removable')) || (pills[i].hasAttribute('data-terra-rollup-pill')) || (pills[i].hasAttribute('aria-haspopup'))) {
      previousIndex = i;
      break;
    }
    previousIndex = index;
  }
  return previousIndex;
};

const RollUpUtils = {
  handleRollUp,
  getFirstFocusableNode,
  getNextFocusableNode,
  getPreviousFocusableNode,
};

export default RollUpUtils;
