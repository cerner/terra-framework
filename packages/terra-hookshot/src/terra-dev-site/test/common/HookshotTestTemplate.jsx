import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from '../../../Hookshot';
import HookshotContent from './HookshotContentTestTemplate';

const propTypes = {
  /**
   * The hookshot contents props. Defaults to closesOnEsc=true, closeOnOutsideClick=true & closeOnResize=true.
   * onRequestClose is provided by the template.
   */
  hookshotContentProps: PropTypes.any,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  includeSvgs: PropTypes.bool,
  contentAttachment: PropTypes.string,
  targetAttachment: PropTypes.string,
  buttonMarginLeft: PropTypes.string,
  buttonMarginRight: PropTypes.string,
  buttonMarginTop: PropTypes.string,
  boundingWidth: PropTypes.string,
  attachmentMargin: PropTypes.number,
};

const defaultProps = {
  hookshotContentProps: { },
  id: 'hookshot',
  isOpen: false,
  includeSvgs: false,
  contentAttachment: 'middle end',
  targetAttachment: 'middle start',
  buttonMarginTop: '55px',
  buttonMarginLeft: '220px',
  buttonMarginRight: '220px',
  boundingWidth: '540px',
};

const attachmentValues = (attachment) => {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  } if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  } if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  } if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  } if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  } if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  } if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  } if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
};

class HookshotTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.triggerHookshot = this.triggerHookshot.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: props.isOpen };
  }

  triggerHookshot() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const {
      hookshotContentProps,
      id,
      isOpen,
      contentAttachment,
      targetAttachment,
      buttonMarginLeft,
      buttonMarginRight,
      buttonMarginTop,
      boundingWidth,
      attachmentMargin,
      includeSvgs,
      ...hookshotProps
    } = this.props;

    const svgs = (
      <div>
        <svg id="svg1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em">
          <path
            fill="#78C346"
            d="M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"
          />
          <path
            fill="#FFF"
            d="M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"
          />
        </svg>
        <svg id="svg2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="2em" width="2em">
          <path
            fill="#B1B5B6"
            d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"
          />
        </svg>
      </div>
    );


    return (
      <div id={`${id}-bounds`} style={{ border: '1px dashed grey', height: '145px', width: boundingWidth }}>
        <Hookshot
          id={id}
          contentAttachment={attachmentValues(contentAttachment)}
          targetAttachment={attachmentValues(targetAttachment)}
          attachmentMargin={attachmentMargin}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById(`trigger-${id}`)}
          boundingRef={() => document.getElementById(`${id}-bounds`)}
          {...hookshotProps}
        >
          <HookshotContent
            id={`${id}-content`}
            onEsc={hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined}
            onOutsideClick={hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined}
            onResize={hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined}
          />
        </Hookshot>
        <button
          type="button"
          id={`trigger-${id}`}
          style={{
            width: '100px', height: '36px', backgroundColor: 'lightGrey', marginLeft: buttonMarginLeft, marginRight: buttonMarginRight, marginTop: buttonMarginTop,
          }}
          onClick={this.triggerHookshot}
        >
          Trigger Hookshot
        </button>
        {includeSvgs && svgs}
      </div>
    );
  }
}

HookshotTemplate.propTypes = propTypes;
HookshotTemplate.defaultProps = defaultProps;

export default HookshotTemplate;
