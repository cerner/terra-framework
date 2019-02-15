/**
 */
const shouldRenderCompactNavigation = activeBreakpoint => activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || activeBreakpoint === 'medium';

export default {
  shouldRenderCompactNavigation,
};

export {
  shouldRenderCompactNavigation,
};
