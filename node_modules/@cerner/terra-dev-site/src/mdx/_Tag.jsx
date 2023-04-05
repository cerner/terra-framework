import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ThemeContext } from 'terra-application/lib/theme';
import styles from './MarkdownTags.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The html tag for this component.
   */
  Tag: PropTypes.string,
  /**
   * Props to apply to this component tag
   */
  props: PropTypes.shape({
    className: PropTypes.string,
    children: PropTypes.node,
  }),
};

/**
 * A component to represent an html tag for MDX.
 * @param {{ Tag, props: componentProps }} props
 */
const TagComp = ({ Tag, props: componentProps }) => {
  const theme = React.useContext(ThemeContext);
  const tagClassNames = classNames(
    cx(Tag, theme.className),
    componentProps.className,
  );

  return (
    <Tag {...componentProps} className={tagClassNames}>
      { componentProps.children }
    </Tag>
  );
};

TagComp.propTypes = propTypes;

export default TagComp;
