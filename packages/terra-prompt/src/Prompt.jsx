import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { componentWithName } from 'react-prop-types';
import styles from './Prompt.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title of the prompt.
   */
  title: PropTypes.string,
  /**
   * Message of the prompt.
   */
  message: PropTypes.string,
  /**
   * Array of buttons. Restricted to terra-button.
   */
  actions: PropTypes.arrayof(componentWithName('Button')),
};

const defaultProps = {
  title: null,
  message: null,
  actions: [],
};

const Prompt = ({ title, message, actions, ...customProps }) => {
  const PromptClassNames = cx('prompt', customProps.className);

  return (
    <div {...customProps} className={PromptClassNames}>
      <div className={'prompt-body'}>
        {title && <h1>{title}</h1>}
        {message && { message }}
        {actions}
      </div>
    </div>
  );
};

Prompt.propTypes = propTypes;
Prompt.defaultProps = defaultProps;

export default Prompt;
