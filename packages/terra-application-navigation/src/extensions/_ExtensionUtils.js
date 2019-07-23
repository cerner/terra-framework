const sliceIndexForBreakpoint = (activeBreakpoint, extensionItems) => {
  let sliceIndex;
  if (activeBreakpoint === 'enormous') {
    sliceIndex = 4;
  } else if (activeBreakpoint === 'huge') {
    sliceIndex = 3;
  } else if (activeBreakpoint === 'large') {
    sliceIndex = 2;
  } else {
    sliceIndex = 1;
  }

  if (extensionItems.length <= sliceIndex + 1) {
    sliceIndex = extensionItems.length;
  }
  return sliceIndex;
};

export default sliceIndexForBreakpoint;
export {
  sliceIndexForBreakpoint,
};
