import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import ContentContainer from 'terra-content-container';
import { availableDisclosureHeights, availableDisclosureWidths } from '../../../DisclosureManager';

const HEIGHT_KEYS = Object.keys(availableDisclosureHeights);
const WIDTH_KEYS = Object.keys(availableDisclosureWidths);

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

    this.generateOptions = this.generateOptions.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.renderFormButton = this.renderFormButton.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { id: 'disclosureDimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
  }

  getId(name) {
    return `${this.state.id}-${name}-${this.props.nestedIndex}`;
  }

  generateOptions(values, name) {
    return values.map((currentValue, index) => {
      const keyValue = index;
      return <option id={`${name}-${currentValue}-${this.props.nestedIndex}`} key={keyValue} value={currentValue}>{currentValue}</option>;
    });
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
        type="button"
        id={`disclose-dimension-${this.props.nestedIndex}`}
        onClick={this.disclose(undefined, { height: this.state.disclosureHeight, width: this.state.disclosureWidth })}
      >
        {name}
      </button>
    );
  }

  renderForm() {
    return (
      <form>
        <label htmlFor={this.getId('height')}>Pop Content Height</label>
        <select id={this.getId('height')} name="disclosureHeight" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>
          {this.generateOptions(HEIGHT_KEYS, 'height')}
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('width')}>Pop Content Width</label>
        <select id={this.getId('width')} name="disclosureWidth" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>
          {this.generateOptions(WIDTH_KEYS, 'width')}
        </select>
        <br />
        <br />
      </form>
    );
  }

  render() {
    const { app, identifier } = this.props;

    return (
      <ContentContainer id={identifier} className="nested-component" fill header={<h2 style={{ margin: '0', borderBottom: '1px solid black' }}>Content Component</h2>}>
        <p>
          id:
          {' '}
          {identifier}
        </p>
        {app && app.releaseFocus ? <p>Modal has lost focus!</p> : null }
        {app && app.requestFocus ? <p>Modal has gained focus!</p> : null }
        <button type="button" className="disclose" onClick={this.disclose()}>Disclose</button>
        <button type="button" className="disclose-tiny" onClick={this.disclose('tiny')}>Disclose Tiny</button>
        <button type="button" className="disclose-small" onClick={this.disclose('small')}>Disclose Small</button>
        <button type="button" className="disclose-medium" onClick={this.disclose('medium')}>Disclose Medium</button>
        <button type="button" className="disclose-large" onClick={this.disclose('large')}>Disclose Large</button>
        <button type="button" className="disclose-huge" onClick={this.disclose('huge')}>Disclose Huge</button>
        <button type="button" className="disclose-fullscreen" onClick={this.disclose('fullscreen')}>Disclose Fullscreen</button>
        <div style={{ padding: '0.7rem' }}>
          {this.renderForm()}
          {this.renderFormButton()}
        </div>
        {app && app.dismiss ? <button type="button" className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {app && app.closeDisclosure ? <button type="button" className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {app && app.goBack ? <button type="button" className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {app && app.maximize ? <button type="button" className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {app && app.minimize ? <button type="button" className="minimize" onClick={this.minimize}>Minimize</button> : null }
        {app && app.requestFocus ? <button type="button" className="requestFocus" onClick={this.requestFocus}>Request Focus</button> : null }
        {app && app.releaseFocus ? <button type="button" className="releaseFocus" onClick={this.releaseFocus}>Release Focus</button> : null }
      </ContentContainer>
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
