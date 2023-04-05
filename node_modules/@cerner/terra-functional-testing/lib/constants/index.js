const TERRA_VIEWPORTS = {
  tiny: {
    width: 470,
    height: 768
  },
  small: {
    width: 622,
    height: 768
  },
  medium: {
    width: 838,
    height: 768
  },
  large: {
    width: 1000,
    height: 768
  },
  huge: {
    width: 1300,
    height: 768
  },
  enormous: {
    width: 1500,
    height: 768
  }
};
const BUILD_BRANCH = {
  master: 'master',
  dev: 'dev',
  pullRequest: /pr-\d+/g
};
const BUILD_TYPE = {
  branchEventCause: 'BranchEventCause'
};
module.exports = {
  TERRA_VIEWPORTS,
  BUILD_BRANCH,
  BUILD_TYPE
};