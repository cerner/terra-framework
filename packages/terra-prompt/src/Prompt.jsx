import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import { elementType } from 'react-prop-types';
import styles from './Prompt.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /*
  * Title of the prompt.
  */
  title: PropTypes.string,
  /*
  * Message of the prpmpt.
  */
  message: PropTypes.string,
  /* d
  * Array of buttons. Restricted to terra-button.
  */
  actions: PropTypes.arrayOf(elementType(Button)),
};

const defaultProps = {
  title: '',
  message: '',
  onChange: [],
  actions: [],
};

const Prompt = ({ title, message, actions, ...customProps }) => {
  const PromptClassNames = cx([
    'prompt',
    customProps.className,
  ]);

  return (<div {...customProps} className={PromptClassNames}>{title}</div>);
};

Prompt.propTypes = propTypes;
Prompt.defaultProps = defaultProps;

export default Prompt;
