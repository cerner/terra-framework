import React from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'terra-image';
import Suspense from '../shared/Suspense';
import ContentLoadedContainer from '../content/_ContentLoaded';
import { contentImportsShape, pageContentConfigShape } from '../site/siteConfigShapes';
import kaiju404 from '../pages/kaiju-404.gif';

const propTypes = {
  /**
   * Config describing the page
   */
  pageContentConfig: pageContentConfigShape.isRequired,

  /**
   * Function called to request closing the modal
   */
  contentImports: contentImportsShape.isRequired,
};

const ContentLayout = ({ pageContentConfig, contentImports }) => {
  const location = useLocation();
  const { pathname } = location;
  const ContentComponent = contentImports[pathname];
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
    <Suspense
      onError={() => setLoadingFailed(true)}
    >
      <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
        <ContentComponent />
      </ContentLoadedContainer>
    </Suspense>
  );
};

ContentLayout.propTypes = propTypes;

export default ContentLayout;
