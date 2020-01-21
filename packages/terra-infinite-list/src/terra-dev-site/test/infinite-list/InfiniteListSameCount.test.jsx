import React from 'react';
import classNames from 'classnames/bind';
import InfiniteList, { Item } from '../../../index';
import styles from './InfiniteListTestCommon.module.scss';

const cx = classNames.bind(styles);

class InfiniteListSameCount extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateItems = this.handleUpdateItems.bind(this);
    this.state = { useItemOne: true };
  }

  handleUpdateItems() {
    this.setState(prevState => ({ useItemOne: !prevState.useItemOne }));
  }

  render() {
    const items1 = [
      <Item key="item-0"><div className={cx('item-type1')}>Item 0</div></Item>,
      <Item key="item-1"><div className={cx('item-type2')}>Item 1</div></Item>,
      <Item key="item-2"><div className={cx('item-type1')}>Item 2</div></Item>,
      <Item key="item-3"><div className={cx('item-type2')}>Item 3</div></Item>,
    ];

    const items2 = [
      <Item key="item-0"><div className={cx('item-type3')}>Item 0</div></Item>,
      <Item key="item-1"><div className={cx('item-type4')}>Item 1</div></Item>,
      <Item key="item-2"><div className={cx('item-type3')}>Item 2</div></Item>,
      <Item key="item-3"><div className={cx('item-type4')}>Item 3</div></Item>,
    ];

    return (
      <div>
        <button type="button" id="test-click" onClick={this.handleUpdateItems}>update items</button>
        <div className={cx('infinite-list-wrapper')}>
          <InfiniteList
            id="test-infinite-list"
            isFinishedLoading
            ariaLabel="Same Count"
          >
            {this.state.useItemOne ? items1 : items2}
          </InfiniteList>
        </div>
      </div>
    );
  }
}
export default InfiniteListSameCount;
