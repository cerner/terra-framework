import React from 'react';
import PropTypes from 'prop-types';
import useNotificationBanners from '../../../notification-banner/private/useNotificationBanners';
import NotificationBannerExample from './NotificationBannerExample';

const Example = ({ isInitiallyClosed }) => {
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <NotificationBannerProvider>
      <NotificationBanners />
      <NotificationBannerExample isInitiallyClosed={isInitiallyClosed} />
    </NotificationBannerProvider>
  );
};

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: false,
};

export default Example;
