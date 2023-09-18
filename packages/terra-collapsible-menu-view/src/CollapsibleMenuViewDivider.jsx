import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import ThemeContext from 'terra-theme-context';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * Uses a ">" icon instead of a line.
   */
  useChevronRightIcon: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

const CollapsibleMenuViewDivider = ({ useChevronRightIcon }, { isCollapsibleMenuItem }) => {
  const theme = React.useContext(ThemeContext);
  if (useChevronRightIcon) {
    if (isCollapsibleMenuItem) {
      return null;
    }

    return (
      <div className={cx(['chevron-right', 'face-up-item', theme.className])}>
        <IconChevronRight />
      </div>
    );
  }

  if (isCollapsibleMenuItem) {
    return <Menu.Divider />;
  }

  return <div className={cx(['divider', 'face-up-item', theme.className])} />;
};

CollapsibleMenuViewDivider.contextTypes = contextTypes;
CollapsibleMenuViewDivider.propTypes = propTypes;
export default CollapsibleMenuViewDivider;
