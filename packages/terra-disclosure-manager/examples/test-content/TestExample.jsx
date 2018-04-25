import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { availableDisclosureHeights, availableDisclosureWidths } from '../../lib/DisclosureManager';

const HEIGHT_KEYS = Object.keys(availableDisclosureHeights);
const WIDTH_KEYS = Object.keys(availableDisclosureWidths);

const generateOptions = values => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  })
);

class TestExample extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);
    this.requestFocus = this.requestFocus.bind(this);
    this.releaseFocus = this.releaseFocus.bind(this);

    this.renderFormButton = this.renderFormButton.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { id: 'dimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
  }

  getId(name) {
    return name + this.state.id;
  }

  disclose(size, dimensions) {
    const { disclosureType, nestedIndex } = this.props;

    const newIndex = nestedIndex + 1;
    return () => {
      this.props.app.disclose({
        preferredType: disclosureType,
        size,
        dimensions,
        content: {
          key: `DemoContainer-${newIndex}`,
          component: <TestExample identifier={`DemoContainer-${newIndex}`} nestedIndex={newIndex} />,
        },
      });
    };
  }

  dismiss() {
    this.props.app.dismiss();
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  goBack() {
    this.props.app.goBack();
  }

  maximize() {
    this.props.app.maximize();
  }

  minimize() {
    this.props.app.minimize();
  }

  requestFocus() {
    this.props.app.requestFocus();
  }

  releaseFocus() {
    this.props.app.releaseFocus();
  }

  renderFormButton() {
    const name = `Disclose (${this.state.disclosureHeight}) x (${this.state.disclosureWidth})`;

    return (
      <button
        onClick={this.disclose(undefined, { height: this.state.disclosureHeight, width: this.state.disclosureWidth })}
      >
        {name}
      </button>
    );
  }

  renderForm() {
    return (
      <form>
        <label htmlFor={this.getId('disclosureHeight')}>Pop Content Height</label>
        <select id={this.getId('disclosureHeight')} name="disclosureHeight" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>
          {generateOptions(HEIGHT_KEYS)}
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('disclosureWidth')}>Pop Content Width</label>
        <select id={this.getId('disclosureWidth')} name="disclosureWidth" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>
          {generateOptions(WIDTH_KEYS)}
        </select>
        <br />
        <br />
      </form>
    );
  }

  render() {
    const { app, identifier } = this.props;

    return (
      <div id={identifier} className="nested-component" style={{ height: '100%', padding: '10px' }}>
        <h2>Content Component</h2>
        <br />
        <h4>id: {identifier}</h4>
        <br />
        {app && app.releaseFocus ? <h4>Modal has lost focus!</h4> : null }
        {app && app.requestFocus ? <h4>Modal has gained focus!</h4> : null }
        <br />
        <button className="disclose" onClick={this.disclose()}>Disclose</button>
        <button className="disclose-tiny" onClick={this.disclose('tiny')}>Disclose Tiny</button>
        <button className="disclose-small" onClick={this.disclose('small')}>Disclose Small</button>
        <button className="disclose-medium" onClick={this.disclose('medium')}>Disclose Medium</button>
        <button className="disclose-large" onClick={this.disclose('large')}>Disclose Large</button>
        <button className="disclose-huge" onClick={this.disclose('huge')}>Disclose Huge</button>
        <button className="disclose-fullscreen" onClick={this.disclose('fullscreen')}>Disclose Fullscreen</button>
        <div style={{ padding: '0.7rem' }}>
          {this.renderForm()}
          {this.renderFormButton()}
        </div>
        {app && app.dismiss ? <button className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {app && app.closeDisclosure ? <button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {app && app.goBack ? <button className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {app && app.maximize ? <button className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {app && app.minimize ? <button className="minimize" onClick={this.minimize}>Minimize</button> : null }
        {app && app.requestFocus ? <button className="requestFocus" onClick={this.requestFocus}>Request Focus</button> : null }
        {app && app.releaseFocus ? <button className="releaseFocus" onClick={this.releaseFocus}>Release Focus</button> : null }
      </div>
    );
  }
}

TestExample.propTypes = {
  app: AppDelegate.propType,
  identifier: PropTypes.string,
  disclosureType: PropTypes.string,
  nestedIndex: PropTypes.number,
};

TestExample.defaultProps = {
  nestedIndex: 0,
};

export default TestExample;
