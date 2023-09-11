import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

import styles from './DisclosureComponent.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  rowHeader: PropTypes.string,
  columnHeader: PropTypes.string,
  disclosureManager: disclosureManagerShape,
};

const defaultProps = {
  name: 'Disclosure Component',
};

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.checkLockState = this.checkLockState.bind(this);

    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    const { disclosureManager } = this.props;

    if (disclosureManager && disclosureManager.registerDismissCheck) {
      disclosureManager.registerDismissCheck(this.checkLockState);
    }
  }

  checkLockState() {
    if (this.state.text && this.state.text.length) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-restricted-globals
        if (!confirm(`${this.props.name} has unsaved changes that will be lost. Do you wish to continue?`)) { // eslint-disable-line no-alert
          reject();
          return;
        }

        resolve();
      });
    }

    return Promise.resolve();
  }

  render() {
    const {
      disclosureManager, name, content, rowHeader, columnHeader,
    } = this.props;

    return (
      <ContentContainer
        fill
        header={(
          <ActionHeader
            title={`Disclosure - ${name}`}
            onClose={disclosureManager.closeDisclosure}
          />
        )}
      >
        <div className={cx('content-wrapper')}>
          <h3>
            {`${rowHeader} - ${columnHeader}`}
          </h3>
          <p>{content}</p>
          <Button
            text="Dismiss"
            onClick={() => {
              disclosureManager.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          />
        </div>
      </ContentContainer>
    );
  }
}

DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;

const WrappedDisclosureComponent = withDisclosureManager(DisclosureComponent);

export default WrappedDisclosureComponent;
