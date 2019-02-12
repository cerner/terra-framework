import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import List, { Item } from 'terra-list';
import ContentContainer from 'terra-content-container';
import Arrange from 'terra-arrange';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

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

  handleSelection(event, metaData) {
    const { aggregatorDelegate, name, discloseOnSelect } = this.props;

    const disclosureSizeForIndex = {
      0: 'tiny',
      1: 'small',
      2: 'medium',
      3: 'large',
      4: 'huge',
      5: 'fullscreen',
    };

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedIndex === metaData.index) {
      aggregatorDelegate.releaseFocus()
        .catch(() => {
          console.log('Section - Focus release failed. Something must be locked.'); // eslint-disable-line no-console
        });
      return;
    }

    aggregatorDelegate.requestFocus({
      selectedIndex: metaData.index,
    })
      .then(({ disclose }) => {
        if (discloseOnSelect) {
          disclose({
            preferredType: this.props.disclosureType,
            size: disclosureSizeForIndex[metaData.index],
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
        <List
          dividerStyle="standard"
          role="listbox"
        >
          <Item
            isSelected={index === 0}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 0 }}
          >
            <div style={{ padding: '.7rem' }}>Row 0</div>
          </Item>
          <Item
            isSelected={index === 1}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 1 }}
          >
            <div style={{ padding: '.7rem' }}>Row 1</div>
          </Item>
          <Item
            isSelected={index === 2}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 2 }}
          >
            <div style={{ padding: '.7rem' }}>Row 2</div>
          </Item>
          <Item
            isSelected={index === 3}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 3 }}
          >
            <div style={{ padding: '.7rem' }}>Row 3</div>
          </Item>
          <Item
            isSelected={index === 4}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 4 }}
          >
            <div style={{ padding: '.7rem' }}>Row 4</div>
          </Item>
          <Item
            isSelected={index === 5}
            isSelectable
            onSelect={this.handleSelection}
            metaData={{ index: 5 }}
          >
            <div style={{ padding: '.7rem' }}>Row 5</div>
          </Item>
        </List>
      </ContentContainer>
    );
  }
}

AggregatorItem.propTypes = propTypes;

export default AggregatorItem;
