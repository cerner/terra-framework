import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import Arrange from 'terra-arrange';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import classNames from 'classnames/bind';
import List from './placeholder-list/PlaceholderList';
import Item from './placeholder-list/PlaceholderListItem';
import styles from './AggregatorItem.module.scss';

import DisclosureComponent from './DisclosureComponent';

const cx = classNames.bind(styles);

const ReadonlyModal = withDisclosureManager(({ disclosureManager }) => (
  <ContentContainer
    header={(
      <ActionHeader
        title="Info Modal"
        onClose={disclosureManager.closeDisclosure}
        onBack={disclosureManager.goBack}
      />
    )}
  >
    <div className={cx('readonly-modal-content')}>
      <p>This modal was not presented through the Aggregator. The Aggregator state was maintained.</p>
    </div>
  </ContentContainer>
));

ReadonlyModal.propTypes = {
  disclosureManager: disclosureManagerShape,
};

const propTypes = {
  aggregatorDelegate: PropTypes.object,
  name: PropTypes.string,
  disclosureType: PropTypes.string,
  discloseOnSelect: PropTypes.bool,
  customDisclose: PropTypes.func,
};

class AggregatorItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
    this.launchModal = this.launchModal.bind(this);
  }

  handleSelection(event, index) {
    const { aggregatorDelegate, name, discloseOnSelect } = this.props;

    const disclosureSizeForIndex = {
      0: 'tiny',
      1: 'small',
      2: 'medium',
      3: 'large',
      4: 'huge',
      5: 'fullscreen',
    };

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedIndex === index) {
      aggregatorDelegate.releaseFocus()
        .catch(() => {
          console.log('Section - Focus release failed. Something must be locked.'); // eslint-disable-line no-console
        });
      return;
    }

    aggregatorDelegate.requestFocus({
      selectedIndex: index,
    })
      .then(({ disclose }) => {
        if (discloseOnSelect) {
          disclose({
            preferredType: this.props.disclosureType,
            size: disclosureSizeForIndex[index],
            content: {
              key: `Nested ${name}`,
              component: <DisclosureComponent name={`Nested ${name}`} disclosureType={this.props.disclosureType} />,
            },
          });
        }
      })
      .catch((error) => {
        console.log(`Section - Selection denied - ${error}`); // eslint-disable-line no-console
      });
  }

  launchModal() {
    const { customDisclose } = this.props;

    const key = `ModalContent-${Date.now()}`;

    customDisclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key,
        component: <ReadonlyModal />,
      },
    });
  }

  render() {
    const {
      name, disclosureType, aggregatorDelegate, discloseOnSelect, customDisclose, ...customProps
    } = this.props;

    let index;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedIndex !== undefined) {
      index = aggregatorDelegate.itemState.selectedIndex;
    }

    return (
      <ContentContainer
        {...customProps}
        header={(
          <Arrange
            className={cx('header-arrange')}
            fitStart={(
              <div className={cx('header-arrange-content')}>
                {customDisclose ? <Button text="Modal (Without Requesting Focus)" onClick={this.launchModal} /> : null}
              </div>
            )}
            fill={<div>{name}</div>}
          />
        )}
      >
        <List isPadded>
          <Item
            isSelected={index === 0}
            onSelect={event => this.handleSelection(event, 0)}
          >
            <div>Row 0</div>
          </Item>
          <Item
            isSelected={index === 1}
            onSelect={event => this.handleSelection(event, 1)}
          >
            <div>Row 1</div>
          </Item>
          <Item
            isSelected={index === 2}
            onSelect={event => this.handleSelection(event, 2)}
          >
            <div>Row 2</div>
          </Item>
          <Item
            isSelected={index === 3}
            onSelect={event => this.handleSelection(event, 3)}
          >
            <div>Row 3</div>
          </Item>
          <Item
            isSelected={index === 4}
            onSelect={event => this.handleSelection(event, 4)}
          >
            <div>Row 4</div>
          </Item>
          <Item
            isSelected={index === 5}
            onSelect={event => this.handleSelection(event, 5)}
          >
            <div>Row 5</div>
          </Item>
        </List>
      </ContentContainer>
    );
  }
}

AggregatorItem.propTypes = propTypes;

export default AggregatorItem;
