import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps as highlightProps } from 'prism-react-renderer';
import classNames from 'classnames/bind';
import styles from './MarkdownTags.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Children for the component.
   */
  children: PropTypes.node,
  /**
   * ClassName for the component.
   */
  className: PropTypes.string,
};

const Code = ({ children, className }) => {
  const language = (className || '').replace(/language-/, '');
  return (
    // We remove the theme to just use the css theme.
    <Highlight {...highlightProps} code={children} language={language} theme={undefined}>
      {({
        className: highlightClassName,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        // add the code block class.
        <code className={cx('code', highlightClassName)}>
          {/* we remove the last token because it's always an extra line */}
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

Code.propTypes = propTypes;

export default Code;
