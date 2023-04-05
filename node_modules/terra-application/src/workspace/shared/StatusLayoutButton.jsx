import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

const propTypes = {
  /**
   * Text to render within the button.
   */
  text: PropTypes.string,
  /**
   * Callback function executed on button selection.
   */
  onClick: PropTypes.func,
};

const StatusLayoutButton = ({ text, onClick }) => (
  <Button onClick={onClick} text={text} variant="neutral" />
);

StatusLayoutButton.propTypes = propTypes;

export default StatusLayoutButton;
