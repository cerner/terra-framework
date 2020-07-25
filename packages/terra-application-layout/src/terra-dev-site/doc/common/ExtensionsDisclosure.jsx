import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import classNames from 'classnames/bind';
import styles from './ApplicationLayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string,
  disclosureManager: disclosureManagerShape,
};

const ExtensionsDisclosure = ({ name, disclosureManager }) => (
  <ContentContainer
    fill
    header={(
      <ActionHeader
        title={name.charAt(0).toUpperCase() + name.slice(1)}
        onClose={disclosureManager.closeDisclosure}
        onBack={disclosureManager.goBack}
        onMaximize={disclosureManager.maximize}
        onMinimize={disclosureManager.minimize}
      />
   )}
  >
    <div className={cx('content-wrapper')}>
      Content for extension:
      {name}
    </div>
  </ContentContainer>
);

ExtensionsDisclosure.propTypes = propTypes;

export default withDisclosureManager(ExtensionsDisclosure);
