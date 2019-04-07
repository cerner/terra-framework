import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from '../../../Hookshot';
import styles from './HTMLSelectExample.module.scss';


const propTypes = {
  /**
    * Text to be applied to the select label.
    */
  labelText: PropTypes.string,
  /**
    * Name to be applied to the select.
    */
  selectName: PropTypes.string,
  /**
    * Value to be binded to the select.
    */
  value: PropTypes.string,
  /**
    * Options to be displayed in the Hookshot.
    */
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  /**
    * Name to be applied to the Hookshot.
    */
  hookShotName: PropTypes.string,
  /**
    * Name to be appended along with compoent name while creating the Id attribute.
    */
  idAppendName: PropTypes.string,
};

const AboveAttachment = {
  vertical: 'bottom',
  horizontal: 'start',
};

const BelowAttachment = {
  vertical: 'top',
  horizontal: 'start',
};

const generateOptions = ({ values }) => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return (
      <option hidden key={keyValue} value={currentValue}>{currentValue}</option>
    );
  })
);


class HTMLSelectExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectClick = this.handleSelectClick.bind(this);
    this.handleSelectClose = this.handleSelectClose.bind(this);
    this.handleHTMLSelectValueChange = this.handleHTMLSelectValueChange.bind(this);
    this.handleListSelect = this.handleListSelect.bind(this);
    this.setSelectNode = this.setSelectNode.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.state = {
      isOpen: false,
      isAbove: false,
      htmlSelectValue: this.props.value,
    };
  }

  setSelectNode(node) {
    this.selectNode = node;
  }

  handleSelectClick() {
    this.setState(previousState => ({ isOpen: !previousState.isOpen }));
  }

  handleSelectClose() {
    this.setState({ isOpen: false });
  }

  handleHTMLSelectValueChange(event) {
    this.setState({ htmlSelectValue: event.target.value });
  }

  handleListSelect(event) {
    this.setState({ htmlSelectValue: event.target.innerHTML });
  }

  positionDropdown() {
    if (!this.state.isOpen) {
      return;
    }

    const { height } = this.HookShotNode.getBoundingClientRect();
    const { bottom, top } = this.selectNode.getBoundingClientRect();
    const spaceBelow = window.innerHeight - bottom;
    const canFitBelow = height < spaceBelow || spaceBelow > top;
    this.setState({ isAbove: !canFitBelow });
  }

  render() {
    const selectWidth = this.selectNode === undefined
      ? '100%'
      : this.selectNode.offsetWidth;

    const styleClass = (value) => {
      let className;
      if (this.state.htmlSelectValue === value) {
        className = styles.selected;
      } else {
        className = styles.liclass;
      }
      return className;
    };

    const getId = name => `${name + this.props.idAppendName}`;

    const addToList = details => (
      details.map((currentValue, index) => {
        const keyValue = index;
        return (
          <li className={styleClass(currentValue)} role="option" aria-selected key={keyValue} onClick={this.handleListSelect} onKeyDown={this.handleListSelect}>
            <span className={styles.spanclass}>{currentValue}</span>
          </li>
        );
      })
    );

    const addToUnorderedList = ({ Contents }) => (
      <ul className={styles.ulclass} style={{ width: `${selectWidth}px` }}>
        {addToList(Contents)}
      </ul>
    );

    const HookshotContent = (
      <Hookshot.Content
        onEsc={this.handleSelectClose}
        onOutsideClick={this.handleSelectClose}
        onResize={this.handleSelectClose}
        onContentResize={this.positionDropdown}
        refCallback={(ref) => { this.HookShotNode = ref; }}
      >
        {addToUnorderedList({ Contents: this.props.selectOptions })}
      </Hookshot.Content>
    );

    const HookShotRender = (
      <Hookshot
        id={getId(this.props.hookShotName)}
        name={this.props.hookShotName}
        isEnabled
        isOpen={this.state.isOpen}
        attachmentBehavior="none"
        contentAttachment={this.state.isAbove ? AboveAttachment : BelowAttachment}
        targetAttachment={this.state.isAbove ? BelowAttachment : AboveAttachment}
        targetRef={() => document.getElementById(getId(this.props.selectName))}
      >
        {HookshotContent}
      </Hookshot>
    );

    return (
      <div style={{ maxWidth: '72.857rem' }}>
        <div style={{ height: '23px' }}>
          <label htmlFor={getId(this.props.selectName)} style={{ fontWeight: 'bold' }}>{this.props.labelText}</label>
        </div>
        <select
          className={styles.selectclass}
          id={getId(this.props.selectName)}
          name={this.props.selectName}
          onMouseDown={(event) => { event.preventDefault(); }}
          onClick={this.handleSelectClick}
          value={this.state.htmlSelectValue}
          onChange={this.handleHTMLSelectValueChange}
          ref={this.setSelectNode}
        >
          {generateOptions({ values: this.props.selectOptions })}
          {HookShotRender}
        </select>
      </div>
    );
  }
}

HTMLSelectExample.propTypes = propTypes;

export default HTMLSelectExample;
