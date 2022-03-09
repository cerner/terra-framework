/**
 * Takes pill as input and returns its width.
 */
const getPillWidth = (pill) => {
  const pillWidth = pill.offsetWidth + parseFloat(window.getComputedStyle(pill, null).getPropertyValue('margin-right'), 10);
  return pillWidth;
};

/**
 * Takes rollUpPill as input and returns its width.
 */
const getRollUpPillWidth = (rollUpPill) => {
  const rollupPillWidth = rollUpPill.parentElement.offsetWidth + parseFloat(window.getComputedStyle(rollUpPill.parentElement, null).getPropertyValue('margin-right'), 10);
  return rollupPillWidth;
};

/**
 * Takes pill container ref as input and returns the index value from which the pills need to be hidden/rolled up.
 */
const getRollUpIndex = (pillListRef) => {
  const rollUpPill = pillListRef.current.querySelector('[data-terra-rollup-pill]');
  const pills = pillListRef.current.querySelectorAll('[data-terra-pill]');
  const containerWidth = pillListRef.current.offsetWidth;
  let totalPillWidth = 0;
  let startIndex = 0;
  let rollupPillWidth = 0;

  if (rollUpPill) {
    rollupPillWidth = getRollUpPillWidth(rollUpPill);
  }

  for (let i = 0; i < pills.length; i += 1) {
    if (totalPillWidth >= containerWidth) {
      break;
    }
    const pillWidth = getPillWidth(pills[i]);
    if (pillWidth + totalPillWidth + rollupPillWidth < containerWidth) {
      startIndex = i + 1;
    }
    totalPillWidth += pillWidth;
  }
  return startIndex;
};

/**
 * Takes 'pill' element and tabindex 'val' as inputs and sets the pill elements tabindex.
 */
const setPillsTabIndex = (pills, val) => {
  for (let i = 0; i < pills.length; i += 1) {
    pills[i].setAttribute('tabindex', val);
  }
};

/**
 * Takes 'rollUpPill' element and tabindex 'val' as inputs and sets the rollUpPill tabindex.
 */
const setRollUpPillTabIndex = (rollUpPill, val) => {
  rollUpPill.setAttribute('tabindex', val);
};

const PillsUtils = {
  getRollUpIndex,
  setPillsTabIndex,
  setRollUpPillTabIndex,
};

export default PillsUtils;
