import React from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResponsiveElement from 'terra-responsive-element';
import Card from 'terra-card';
import CellGrid, { Cell } from 'terra-cell-grid';
import Image from 'terra-image';
import Pills from '@cerner/terra-pills/lib/index';
import ArticlePhoto399x314 from '../../../common/images/creative-commons/20384488141_e08573b033__399x314.jpg';
import ArticlePhoto800x629 from '../../../common/images/creative-commons/20384488141_e08573b033__800x629.jpg';
import styles from './_DocExamplesCommon.module.scss';

const cx = classNames.bind(styles);

const cardArticlePhotoUnit = (breakpointLayout) => (
  <div className={cx('card-article-photo')}>
    <Image
      src={breakpointLayout === 'tiny' ? ArticlePhoto800x629 : ArticlePhoto399x314}
      alt="Photo: James H. Shannon Building (Building One), NIH campus, Bethesda MD
  by National Institutes of Health (NIH)"
      fit="cover"
      height={breakpointLayout === 'tiny' ? '629' : '233'}
      width={breakpointLayout === 'tiny' ? '800' : '320'}
    />
    <p className={cx('card-article-photo-caption')}>James H. Shannon Building (Building One), NIH campus, Bethesda MD by National Institutes of Health (NIH) is marked under CC PDM 1.0.</p>
  </div>
);

const cardArticleContentUnit = (
  <div className={cx('card-article-content')}>
    <h2 className={cx('card-article-content-heading')}>National Institutes of Health</h2>
    <p>The National Institutes of Health (NIH) is the primary agency of the United States government responsible for biomedical and public health research. It was founded in the late 1880s and is now part of the United States Department of Health and Human Services. </p>
    <p>The NIH comprises 27 separate institutes and centers of different biomedical disciplines and is responsible for many scientific accomplishments, including the discovery of fluoride to prevent tooth decay, the use of lithium to manage bipolar disorder, and the creation of vaccines against hepatitis, Haemophilus influenzae (HIB), and human papillomavirus (HPV).</p>
  </div>
);

const cardArticlePillUnit = (
  <div className={cx('card-article-pills')}>
    <span
      id="terra-pills-example-introduction-to-pills-label"
      className={cx('pill-container-label')}
    >
      Article Keywords:
    </span>
    <Pills
      ariaLabel="Article Keywords:"
      ariaLabelledBy="terra-pills-example-introduction-to-pills-label"
    >
      <Pills.Pill label="National Institutes of Health" pillKey="National Institutes of Health" id="terra-pills-example-introduction-pill-nih" />
      <Pills.Pill label="Biomedical Sciences" pillKey="Biomedical Sciences" id="terra-pills-example-introduction-pill-sciences" />
      <Pills.Pill label="Public Health Research" pillKey="Public Health Research" id="terra-pills-example-introduction-pill-research" />
      <Pills.Pill label="Scientific Discovery" pillKey="Scientific Discovery" id="terra-pills-example-introduction-pill-discovery" />
      <Pills.Pill label="US Department of Health and Human Services" pillKey="US Department of Health and Human Services" id="terra-pills-example-introduction-pill-usdeptofhealth" />
    </Pills>
  </div>
);

const mediumResponsiveLayout = (
  <CellGrid>
    <Cell key="cell-left" width={{ static: { value: 350, unit: 'px' } }}>
      {cardArticlePhotoUnit('medium')}
    </Cell>
    <Cell key="cell-right">
      {cardArticleContentUnit}
      {cardArticlePillUnit}
    </Cell>
  </CellGrid>
);

const tinyResponsiveLayout = (
  <Card.Body className={cx('single-column-layout')}>
    {cardArticleContentUnit}
    {cardArticlePhotoUnit('tiny')}
    {cardArticlePillUnit}
  </Card.Body>
);

const IntroductionToPills = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Card variant="raised" className={cx(['card-article', theme.className])}>
      <ResponsiveElement
        tiny={tinyResponsiveLayout}
        medium={mediumResponsiveLayout}
        responsiveTo="parent"
      />
    </Card>
  );
};

export default IntroductionToPills;
