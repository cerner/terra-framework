import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import SelectableList from 'terra-list/lib/SelectableList';
import ContentContainer from 'terra-content-container';
import Arrange from 'terra-arrange';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager } from 'terra-disclosure-manager';

import DisclosureComponent from './DisclosureComponent';

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
    <div style={{ padding: '15px' }}>
      <p>This modal was not presented through the Aggregator. The Aggregator state was maintained.</p>
    </div>
  </ContentContainer>
));

ReadonlyModal.propTypes = {
  disclosureManager: PropTypes.object,
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

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.index === index) {
      aggregatorDelegate.releaseFocus()
        .catch(() => {
          console.log('Section - Focus release failed. Something must be locked.'); // eslint-disable-line no-console
        });
      return;
    }

    aggregatorDelegate.requestFocus({
      index,
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

    let selectedIndex;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.index !== undefined) {
      selectedIndex = aggregatorDelegate.itemState.index;
    }

    return (
      <ContentContainer
        {...customProps}
        header={(
          <Arrange
            style={{ background: '#f4f4f4', padding: '0.71429rem 0.5rem', fontSize: '1.285rem' }}
            fitStart={(
              <div style={{ marginRight: '.7rem' }}>
                {customDisclose ? <Button text="Modal (Without Requesting Focus)" onClick={this.launchModal} /> : null}
              </div>
            )}
            fill={<div>{name}</div>}
          />
        )}
      >
        <SelectableList
          isDivided
          selectedIndexes={selectedIndex !== undefined ? [selectedIndex] : []}
          onChange={this.handleSelection}
        >
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 0</div>
            }
          />
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 1</div>
            }
          />
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 2</div>
            }
          />
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 3</div>
            }
          />
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 4</div>
            }
          />
          <SelectableList.Item
            content={
              <div style={{ padding: '.7rem' }}>Row 5</div>
            }
          />
        </SelectableList>
      </ContentContainer>
    );
  }
}

AggregatorItem.propTypes = propTypes;

export default AggregatorItem;
