const defaultBannerPriority = [
  'hazard-high',
  'hazard-medium',
  'hazard-low',
  'error',
  'unsatisfied',
  'unverified',
  'custom',
];

const fusionBannerPriority = [
  'hazard-high',
  'error',
  'hazard-medium',
  'unsatisfied',
  'unverified',
  'hazard-low',
  'custom',
];

/**
 * Organize / prioritized the banners for the given theme.
 * @param {Object[]} banners - the list of banner props to organize
 * @param {String} themeName - name of the theme to prioritize the banners for.
 *
 * @returns List of prioritized banners.
 */
const organizeBannersByPriority = (banners, themeName) => {
  if (!banners) {
    return [];
  }

  let priorityOrder = defaultBannerPriority;
  if (themeName === 'orion-fusion-theme') {
    priorityOrder = fusionBannerPriority;
  }

  const bannersList = priorityOrder.reduce((coll, variant) => {
    if (banners[variant]) {
      const registeredBannersByVariant = Object.values(banners[variant]);
      registeredBannersByVariant.map(registeredBannerProps => coll.push(registeredBannerProps));
    }

    return coll;
  }, []);

  return bannersList;
};

export default organizeBannersByPriority;
