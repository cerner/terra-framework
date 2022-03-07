import React from 'react';
import classNames from 'classnames/bind';
import SlidePanelManager from 'terra-slide-panel-manager';
import DisclosureComponent from './DisclosureComponent';
import styles from './SlidePanelManagerDefault.test.module.scss';

const cx = classNames.bind(styles);

const DisclosureContainer = (wrappedContent) => (
  <div data-disclosure-container className={cx('disclosure-container')}>
    I am wrapping the content with a purple background!
    {wrappedContent}
  </div>
);

const SlidePanelManagerWithDisclosureContainer = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager
      withDisclosureContainer={DisclosureContainer}
    >
      <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerWithDisclosureContainer;
