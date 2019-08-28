import React from 'react';
import Image from 'terra-image';
import MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';
import FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';
import { UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';
import UtilityMenu from 'terra-application-utility/lib/utility/_UtilityMenu';
import classNames from 'classnames/bind';
import styles from './MenuUtilityMenuExample.module.scss';

const cx = classNames.bind(styles);

class MenuUtilityMenuExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.state = {
      selectedKey: null,
      requestCloseCount: 0,
    };
  }

  handleOnChange(event, object) {
    this.setState({ selectedKey: object.key });
  }

  handleOnRequestClose() {
    this.setState(prevState => ({ requestCloseCount: prevState.requestCloseCount + 1 }));
  }

  render() {
    const customComponent = <Image alt="Fallback Avatar" src={FallbackAvatar} className={cx('avatar')} />;
    return (
      <div>
        <div className={cx('content-wrapper')}>
          <UtilityMenu
            initialSelectedKey="menu"
            isHeightBounded
            menuItems={MockConfig(customComponent)}
            onChange={this.handleOnChange}
            onRequestClose={this.handleOnRequestClose}
            variant={UtilityUtils.VARIANTS.MENU}
          />
        </div>
        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>
        <div>{`Request close count: ${this.state.requestCloseCount}`}</div>
      </div>
    );
  }
}

export default MenuUtilityMenuExample;
