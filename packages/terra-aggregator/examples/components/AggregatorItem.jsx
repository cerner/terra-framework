import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import SelectableList from 'terra-list/lib/SelectableList';
import ContentContainer from 'terra-content-container';
import Header from 'terra-clinical-header';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-clinical-action-header';

import { disclosureKey as disclosureContentDisclosureKey } from './DisclosureContent';

const ReadonlyModal = ({ app }) => (
  <ContentContainer
    header={(
      <ActionHeader
        title="Info Modal"
        onClose={app.closeDisclosure}
        onBack={app.goBack}
      />
    )}
  >
    <div style={{ padding: '15px' }}>
      <p>This modal was not presented through the Aggregator. The Aggregator state was maintained.</p>
    </div>
  </ContentContainer>
);

ReadonlyModal.propTypes = {
  app: AppDelegate.propType,
};

AppDelegate.registerComponentForDisclosure('ReadonlyModal', ReadonlyModal);

const propTypes = {
  aggregatorDelegate: PropTypes.object,
  name: PropTypes.string,
  disclosureType: PropTypes.string,

  disclose: PropTypes.func,
  registerDismissCheck: PropTypes.func,
  requestDisclosureFocus: PropTypes.func,
  releaseDisclosureFocus: PropTypes.func,
};

class AggregatorItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
    this.launchModal = this.launchModal.bind(this);
  }

  handleSelection(event, index) {
    const { aggregatorDelegate, name } = this.props;

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
      if (disclose) {
        disclose({
          preferredType: this.props.disclosureType,
          size: 'small',
          content: {
            key: 'DisclosedContent-Demo',
            name: disclosureContentDisclosureKey,
            props: {
              key: name + index,
              id: name,
              name: `Disclosure from ${name} - Row ${index}`,
            },
          },
        });
      }
    })
    .catch((error) => {
      console.log(`Section - Selection denied - ${error}`); // eslint-disable-line no-console
    });
  }

  launchModal() {
    const { disclose } = this.props;

    const key = `ModalContent-${Date.now()}`;

    disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key,
        name: 'ReadonlyModal',
      },
    });
  }

  render() {
    const { name, disclosureType, disclose, aggregatorDelegate, requestDisclosureFocus, releaseDisclosureFocus, registerDismissCheck, ...customProps } = this.props;

    let selectedIndex;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.index !== undefined) {
      selectedIndex = aggregatorDelegate.itemState.index;
    }

    return (
      <ContentContainer
        {...customProps}
        header={(
          <Header
            title={name} startContent={(
              <div style={{ marginRight: '.7rem' }}>
                {disclose ? <Button text="Modal (Without Requesting Focus)" onClick={this.launchModal} /> : null}
              </div>
          )}
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
        </SelectableList>
      </ContentContainer>
    );
  }
}

AggregatorItem.propTypes = propTypes;

export default AggregatorItem;
