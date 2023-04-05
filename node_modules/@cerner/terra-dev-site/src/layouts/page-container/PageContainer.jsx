import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import LayoutActionsContext from '../secondary-navigation-layout/LayoutActionsContext';

import PageContainerContext from './PageContainerContext';

import styles from './PageContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the context of the PageContainer. Any
   * Pages rendered as children will be managed by the PageContainer.
   */
  children: PropTypes.node,
};

/**
 * The PageContainer defines a content region within the application where Pages
 * can be rendered. Any Page components rendered within a PageContainer will be
 * portaled into the PageContainer's root element.
 */
const PageContainer = ({
  children,
}) => {
  const layoutActions = React.useContext(LayoutActionsContext);

  // The LayoutActionsContext values are ignored and not passed through the
  // PageContainerContext. Handling of layout actions is the sole responsibility
  // of the MainPageContainer.
  const pageContainerContextValue = React.useMemo(() => ({
    startActions: layoutActions.startActions || [],
    containerActions: [],
  }), [layoutActions.startActions]);

  return (
    <div
      className={cx('page-container')}
      data-testid="page-container"
    >
      <PageContainerContext.Provider value={pageContainerContextValue}>
        {children}
      </PageContainerContext.Provider>
    </div>
  );
};

PageContainer.propTypes = propTypes;

export default PageContainer;
