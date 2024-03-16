import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import ContentContainer from 'terra-content-container';
import {
  availableDisclosureHeights, availableDisclosureWidths, withDisclosureManager, disclosureManagerShape, DisclosureManagerHeaderAdapter,
} from 'terra-disclosure-manager';
import classNames from 'classnames/bind';
import styles from './DisclosureComponent.module.scss';

const cx = classNames.bind(styles);

const HEIGHT_KEYS = Object.keys(availableDisclosureHeights);
const WIDTH_KEYS = Object.keys(availableDisclosureWidths);

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);

    this.generateOptions = this.generateOptions.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.renderFormButton = this.renderFormButton.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { id: 'disclosureDimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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

  disclose(size, dimensions) {
    const { disclosureType, nestedIndex, renderHeaderAdapter } = this.props;

    const newIndex = nestedIndex + 1;
    return () => {
      this.props.disclosureManager.disclose({
        preferredType: disclosureType,
        size,
        dimensions,
        content: {
          key: `DemoContainer-${newIndex}`,
          component: <WrappedDisclosureComponent identifier={`DemoContainer-${newIndex}`} nestedIndex={newIndex} disclosureType={disclosureType} renderHeaderAdapter={renderHeaderAdapter} />,
        },
      });
    };
  }

  dismiss() {
    this.props.disclosureManager.dismiss();
  }

  closeDisclosure() {
    this.props.disclosureManager.closeDisclosure();
  }

  goBack() {
    this.props.disclosureManager.goBack();
  }

  maximize() {
    this.props.disclosureManager.maximize();
  }

  minimize() {
    this.props.disclosureManager.minimize();
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
    const { disclosureManager, identifier, renderHeaderAdapter } = this.props;

    return (
      <ContentContainer id={identifier} className="nested-component" fill header={<h2 className={cx('content-wrapper')}>Content Component</h2>}>
        {renderHeaderAdapter ? (
          <DisclosureManagerHeaderAdapter
            title={`Disclosure - ${identifier}`}
            collapsibleMenuView={(
              <CollapsibleMenuView allowResetCache={false}>
                <CollapsibleMenuView.Item
                  text="Header Button 1"
                  key="button_1"
                />
                <CollapsibleMenuView.Item
                  text="Header Button 2"
                  key="button_2"
                />
              </CollapsibleMenuView>
            )}
          />
        ) : undefined}

        <p>
          id:
          {' '}
          {identifier}
        </p>
        <button type="button" className="disclose" onClick={this.disclose()}>Disclose</button>
        <button type="button" className="disclose-tiny" onClick={this.disclose('tiny')}>Disclose Tiny</button>
        <button type="button" className="disclose-small" onClick={this.disclose('small')}>Disclose Small</button>
        <button type="button" className="disclose-medium" onClick={this.disclose('medium')}>Disclose Medium</button>
        <button type="button" className="disclose-large" onClick={this.disclose('large')}>Disclose Large</button>
        <button type="button" className="disclose-huge" onClick={this.disclose('huge')}>Disclose Huge</button>
        <button type="button" className="disclose-fullscreen" onClick={this.disclose('fullscreen')}>Disclose Fullscreen</button>
        <div className={cx('form-wrapper')}>
          {this.renderForm()}
          {this.renderFormButton()}
        </div>
        {disclosureManager && disclosureManager.dismiss ? <button type="button" className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {disclosureManager && disclosureManager.closeDisclosure ? <button type="button" className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {disclosureManager && disclosureManager.goBack ? <button type="button" className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {disclosureManager && disclosureManager.maximize ? <button type="button" className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {disclosureManager && disclosureManager.minimize ? <button type="button" className="minimize" onClick={this.minimize}>Minimize</button> : null }
      </ContentContainer>
    );
  }
}

DisclosureComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
  identifier: PropTypes.string,
  disclosureType: PropTypes.string,
  nestedIndex: PropTypes.number,
  renderHeaderAdapter: PropTypes.bool,
};

DisclosureComponent.defaultProps = {
  nestedIndex: 0,
};

const WrappedDisclosureComponent = withDisclosureManager(DisclosureComponent);

export default WrappedDisclosureComponent;
