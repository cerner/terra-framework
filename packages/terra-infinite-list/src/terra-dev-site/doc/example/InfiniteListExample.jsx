import React from 'react';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import debounce from 'lodash.debounce';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import styles from 'terra-infinite-list/lib/terra-dev-site/doc/example/InfiniteListExample.scss';
import InfiniteList, { Item } from 'terra-infinite-list/lib/InfiniteList';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const cx = classNames.bind(styles);

class InfiniteListExample extends React.Component {
  constructor(props) {
    super(props);

    this.addMoreData = debounce(this.addMoreData.bind(this), 1000);
    this.handleSelection = this.handleSelection.bind(this);

    this.state = { stillLoading: true, numberOfPages: 0, selectedKey: null };
  }

  handleSelection(event, metaData) {
    event.preventDefault();
    this.setState({ selectedKey: metaData.key });
  }

  addMoreData() {
    const newState = { numberOfPages: this.state.numberOfPages + 1 };
    if (newState.numberOfPages > 10) {
      return;
    } if (newState.numberOfPages > 9) {
      newState.stillLoading = false;
    }
    this.setState(newState);
  }

  render() {
    const items = [];
    for (let i = 0; i < 15 * this.state.numberOfPages; i += 1) {
      items.push(
        <Item
          key={`${i}`}
          isSelected={this.state.selectedKey === `item-${i}`}
          isSelectable
          onSelect={this.handleSelection}
          metaData={{ key: `item-${i}` }}
        >
          <Arrange
            fitStart={<h3 style={{ width: '50px' }}>{`${i}`}</h3>}
            fill={(
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel.
                  Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh.
                  Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis.
                  Aliquam eget maximus dui, ut rhoncus augue.
              </p>
            )}
            fitEnd={<div className={cx(['icon-wrapper'])}><IconInformation /></div>}
            align="center"
            fitStartAttributes={{ style: { textAlign: 'center' } }}
          />
        </Item>,
      );
    }

    const fullLoading = <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />;

    const progressLoading = (
      <OverlayContainer style={{ height: '80px', width: '100%' }}>
        <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
      </OverlayContainer>
    );

    return (
      <div style={{
        height: '600px', width: '100%', position: 'relative', border: '1px solid black',
      }}
      >
        <InfiniteList
          isDivided
          isFinishedLoading={!this.state.stillLoading}
          onRequestItems={this.addMoreData}
          initialLoadingIndicator={fullLoading}
          progressiveLoadingIndicator={progressLoading}
        >
          {items}
        </InfiniteList>
      </div>
    );
  }
}
export default InfiniteListExample;
