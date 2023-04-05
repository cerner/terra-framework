import React from 'react';
import { useLocation } from 'react-router-dom';
import classNamesBind from 'classnames/bind';
import Image from 'terra-image';
import ContentLoadedContainer from '../content/_ContentLoaded';
import Suspense from '../shared/Suspense';
import kaiju404 from '../pages/kaiju-404.gif';

import siteConfigShape from '../site/siteConfigShapes';

import styles from './ContentLayout.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The site config for the application
   */
  siteConfig: siteConfigShape.isRequired,
};

const Raw = ({ siteConfig }) => {
  const location = useLocation();
  const pathname = location.pathname.substring(4).toLocaleLowerCase();
  const pageContentConfig = siteConfig.pageConfig[pathname];
  const ContentComponent = siteConfig.contentImports[pathname];
  const [loadingFailed, setLoadingFailed] = React.useState();

  if (!pageContentConfig || !ContentComponent) {
    return <Image src={kaiju404} width="100%" alt="404" />;
  }

  if (loadingFailed) {
    return (
      <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
        <div>Error: chunk failed to load.</div>
      </ContentLoadedContainer>
    );
  }

  return (
    <div role="main" className={cx('main')}>
      <Suspense
        fallback={<div>loading</div>}
        onError={() => setLoadingFailed(true)}
      >
        <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
          <ContentComponent />
        </ContentLoadedContainer>
      </Suspense>
    </div>
  );
};

Raw.propTypes = propTypes;

export default Raw;
