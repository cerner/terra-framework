import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-clinical-action-header';

import ManagerDisclosureComponent from './ManagerDisclosureComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  disclosureType: PropTypes.string,
};

class ManagerContentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(size) {
    const { app, disclosureType } = this.props;

    return (
      <Button
        text={`Disclose (${size})`}
        onClick={() => {
          app.disclose({
            preferredType: disclosureType,
            size,
            content: {
              key: `Content-Disclosure-${size}`,
              component: <ManagerDisclosureComponent name={`Disclosure Component (${size})`} />,
            },
          });
        }}
      />
    );
  }

  render() {
    return (
      <ContentContainer
        header={(
          <ActionHeader
            title={'Manager Child'}
          />
        )}
      >
        <div className={cx('content-wrapper')}>
          {this.renderButton('tiny')}
          {this.renderButton('small')}
          {this.renderButton('medium')}
          {this.renderButton('large')}
          {this.renderButton('huge')}
          {this.renderButton('fullscreen')}
          <br />
          <p>The child components can disclose content in the panel at various sizes.</p>
        </div>
      </ContentContainer>
    );
  }
}

ManagerContentComponent.propTypes = propTypes;

export default ManagerContentComponent;
