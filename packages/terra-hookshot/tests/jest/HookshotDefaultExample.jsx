/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Hookshot from '../../src/Hookshot';
import styles from './Hookshot.test.module.scss';

class HookshotDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { isOpen: false };
  }

  handleButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content onRequestClose={this.handleRequestClose}>
        <div className={styles.content}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <Hookshot
          contentAttachment={{ vertical: 'top', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.isOpen}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <button
          type="button"
          id="hookshot-standard-button"
          onClick={this.handleButtonClick}
        >
          {''}
        </button>
      </div>
    );
  }
}

export default HookshotDefaultExample;
