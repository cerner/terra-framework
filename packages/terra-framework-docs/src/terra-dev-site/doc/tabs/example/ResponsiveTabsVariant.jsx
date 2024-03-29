import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveTabsVariantWrapper from './ResponsiveTabsVariantWrapper';
import TabsTemplate from './TabsTemplate';
import IconOnlyTabs from './IconOnlyTabs';

const propTypes = { renderIconTabs: PropTypes.bool };

const TabsColorVariants = ({
  ...props
}) => {
  if (props.renderIconTabs) {
    return (<IconOnlyTabs {...props} id="iconOnlyTabsId" />);
  }

  return (<TabsTemplate {...props} id="responsive" />);
};

TabsColorVariants.propTypes = propTypes;
export default ResponsiveTabsVariantWrapper(TabsColorVariants);
