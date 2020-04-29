import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * TabHeader element containing Tabs.
   */
  tabBar: PropTypes.element.isRequired,
  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: PropTypes.bool,
  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: PropTypes.bool,
  /**
   * Currently active Tabs.Pane components to be displayed.
   */
  children: PropTypes.node.isRequired,
  /**
   * Tabs style. One of: `'modular-centered'`, `'modular-left-aligned'`, `'structural'`.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
   variant: PropTypes.oneOf(['modular-centered', 'modular-left-aligned', 'structural']),
  */
};

const defaultProps = {
  tabFill: false,
  fill: false,
};

const Tabs = ({
  tabFill,
  fill,
  children,
  tabBar,
  ...customProps
}) => {
  const [isLabelTruncated, setIsLabelTruncated] = useState(false);

  // NOTE: Hard-coding variant to structural until discussions have resolved around if we want modular tabs.
  const variant = 'structural';
  const tabsClassNames = cx([
    'tabs-container',
    { 'tab-fill': tabFill },
    variant,
    customProps.className,
  ]);

  let isIconOnly = false;
  const childArray = React.Children.toArray(tabBar.props.children);
  for (let i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isIconOnly) {
      isIconOnly = true;
      break;
    }
  }

  return (
    <ContentContainer
      {...customProps}
      className={tabsClassNames}
      fill={fill}
      header={React.cloneElement(tabBar, { onTruncationChange: value => setIsLabelTruncated(value), variant })}
    >
      <div
        role="tabpanel"
        className={cx(['pane-content', { 'fill-parent': fill }])}
        tabIndex="0"
      >
        {React.Children.map(children, child => (
          React.cloneElement(child, { isLabelHidden: isIconOnly || isLabelTruncated })
        ))}
      </div>
    </ContentContainer>
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
