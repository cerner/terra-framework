import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TabPane.module.scss';

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
  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: PropTypes.bool,
};

const Tab = ({
  id,
  associatedTabId,
  children,
  fill,
  ...customProps
}) => {
  const paneClassNames = cx([
    'pane',
    { fill },
  ]);

  return (
    <div
      {...customProps}
      role="tabpanel"
      className={paneClassNames}
      tabIndex="0"
      id={id}
      aria-labelledby={associatedTabId}
      aria-expanded="true"
    >
      {children}
    </div>
  );
};

Tab.propTypes = propTypes;

export default Tab;
