import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { useActiveMainPage } from '../../../application-container';
import NotificationBanner from '../../../notification-banner/NotificationBanner';
import styles from './TestStyles.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  initialCount: PropTypes.number,
  title: PropTypes.string,
  onShowActivityOverlay: PropTypes.func,
  onShowStatusOverlay: PropTypes.func,
};

const MockContent = ({
  initialCount = 0, title = '', onShowActivityOverlay, onShowStatusOverlay,
}) => {
  const activeMainPage = useActiveMainPage();

  const [clickCount, setClickCount] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  const [showWarningBanner, setShowWarningBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  return (
    <div className={cx('content-container')}>
      <button type="button" onClick={() => setClickCount(clickCount + 1)}>Increment Counter</button>
      <button type="button" data-testid="test-workspace-banner-button" onClick={() => setShowAlertBanner(true)}>Show Alert Banner</button>
      <button type="button" data-testid="test-workspace-banner-warning-button" onClick={() => setShowWarningBanner(true)}>Show Warning Banner</button>
      <button type="button" data-testid="test-workspace-banner-error-button" onClick={() => setShowErrorBanner(true)}>Show Error Banner</button>
      <button
        type="button"
        onClick={() => {
          onShowActivityOverlay(true);

          setTimeout(() => {
            onShowActivityOverlay(false);
          }, 5000);
        }}
      >
        Show Activity Overlay
      </button>
      <button
        type="button"
        onClick={() => {
          onShowStatusOverlay(true);

          setTimeout(() => {
            onShowStatusOverlay(false);
          }, 5000);
        }}
      >
        Show Status Overlay
      </button>
      {showAlertBanner && (
        <NotificationBanner
          variant="hazard-high"
          id="workspace-test-alert-banner"
          description="There is something very wrong"
          onRequestClose={() => setShowAlertBanner(false)}
        />
      )}
      {showWarningBanner && (
      <NotificationBanner
        variant="hazard-medium"
        id="workspace-test-warning-banner"
        description="There is something kind of wrong"
        onRequestClose={() => setShowWarningBanner(false)}
      />
      )}
      {showErrorBanner && (
        <NotificationBanner
          variant="error"
          id="workspace-test-error-banner"
          description="Something broke"
          onRequestClose={() => setShowErrorBanner(false)}
          bannerAction={{
            text: 'Help',
            onClick: () => {},
          }}
        />
      )}
      <div aria-live="polite">
        <p>{`${title}'s Click Counter: ${clickCount}`}</p>
      </div>
      <p>
        Active Main Page Key:
        {' '}
        {activeMainPage?.pageKey}
      </p>
      <p>
        Active Main Page Label:
        {' '}
        {activeMainPage?.pageLabel}
      </p>
      <p>
        Active Main Page MetaData:
        {' '}
        {`${JSON.stringify(activeMainPage?.pageMetaData)}`}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacus cursus massa ullamcorper scelerisque. Aenean vitae posuere neque, consequat dapibus diam. Proin convallis venenatis magna, sit amet volutpat erat. Nulla sodales eu est sit amet sagittis. Suspendisse lacinia diam ut justo venenatis, a sollicitudin ante venenatis. Vivamus a leo ullamcorper, tristique diam id, vestibulum felis. Nullam mattis eget eros vestibulum porttitor. Duis eget massa nec urna ultrices laoreet. Aenean rhoncus mauris in luctus blandit. Morbi tempor enim a libero placerat, at bibendum elit luctus. In in tempor neque, laoreet facilisis quam. Fusce faucibus dui eget erat gravida egestas. Nullam laoreet purus eget urna placerat, sit amet ultrices mi tristique. Sed vulputate gravida risus, vehicula rhoncus ipsum tempus id. Phasellus aliquet nec mi non pretium. Maecenas turpis nulla, mollis et rhoncus vel, porttitor id nisl.
      </p>
      <p>
        In vitae tortor elementum, venenatis sem id, condimentum mauris. Mauris eget eros auctor, ultrices lacus imperdiet, aliquet lorem. Nulla facilisi. Sed libero odio, tincidunt eget congue sed, ornare at nulla. In feugiat, felis a mattis viverra, quam massa rhoncus tortor, sit amet luctus augue dolor bibendum metus. Aliquam eget malesuada est. Aenean at mi ut augue placerat vulputate. Quisque vulputate iaculis semper. Ut vestibulum interdum quam, a facilisis purus dapibus sit amet. Curabitur tempus neque at tortor ultricies mollis. Aliquam commodo pulvinar lectus, sollicitudin tincidunt nulla finibus non.
      </p>
      <p>
        Donec ornare nisi ut lectus luctus, vitae venenatis tellus molestie. Quisque augue ante, pulvinar eget ullamcorper eget, pharetra in est. Aenean urna turpis, lobortis in egestas eu, blandit eget sapien. Suspendisse vitae iaculis justo. Sed ex turpis, ultrices ut lobortis a, vestibulum a tortor. Nullam ut risus ex. Duis condimentum dui sem, interdum porttitor lectus scelerisque nec. Curabitur suscipit felis in porta molestie.
      </p>
      <p>
        Etiam non malesuada urna. Vivamus posuere orci augue, nec egestas mauris cursus blandit. Maecenas eu nisl sed nulla venenatis tincidunt. Donec at cursus sapien, nec scelerisque nibh. Vivamus suscipit consequat ex, id feugiat nisl iaculis id. Pellentesque tristique sodales turpis. Cras rutrum nibh laoreet libero dictum, quis condimentum arcu porttitor. Donec ac aliquam orci. Vestibulum luctus sed mi tincidunt volutpat. Mauris ut neque pellentesque, volutpat ex vel, efficitur massa. Phasellus hendrerit mattis semper. Morbi mi nulla, tincidunt at auctor euismod, viverra at libero.
      </p>
      <p>
        Maecenas aliquam congue augue sed tristique. Vivamus eu consectetur sapien, in eleifend magna. Etiam laoreet ligula eu fermentum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed magna nunc, tempor vitae sagittis eu, vulputate ac lorem. Etiam massa ante, aliquam ac consequat et, efficitur dictum turpis. Integer malesuada purus in lobortis ornare. In hac habitasse platea dictumst. Aliquam finibus ipsum quis nibh volutpat, a posuere mi vestibulum. Cras tincidunt odio et aliquet mollis. Ut ac felis neque. Integer nulla elit, mattis eleifend dui pretium, euismod tristique nulla. Curabitur vulputate viverra odio, vitae blandit est dapibus eu.
      </p>
    </div>
  );
};

MockContent.propTypes = propTypes;

export default MockContent;
