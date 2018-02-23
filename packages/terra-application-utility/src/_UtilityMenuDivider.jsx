import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_UtilityMenuDivider.scss';

const cx = classNames.bind(styles);

const MenuDivider = ({ ...customProps }) => {
  const dividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return <div {...customProps} className={dividerClassNames} role="separator" />;
};

export default MenuDivider;
