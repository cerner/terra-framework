import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab element associated to this panel.
   */
  associatedTabId: PropTypes.string.isRequired,
  /**
   * Currently active Tabs.Pane content to be displayed.
   */
  children: PropTypes.node,
};

const Tab = ({
  id,
  associatedPaneId,
  children,
  ...customProps
}) => {
  const paneClassNames = cx([
    'pane',
    { fill }
  ]);

  return (
    <div
      {...customProps}
      role="tabpanel"
      className={paneClassNames}
      tabIndex="0"
      id={id}
      aria-labelledby={associatedTabId}
    >
      {children}
    </div>
  );
};

Tab.propTypes = propTypes;

export default Tab;
