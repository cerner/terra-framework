import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Tag from './_Tag';
import HTag from './_HTag';
import Code from './_Code';

const propTypes = {
  /**
   * Children are children.
   */
  children: PropTypes.node,
};

/**
 * The components to substitute in for the mdx components
 * We do this to be able to use css modules to style the tags.
 */
const components = {
  a: props => (Tag({ Tag: 'a', props })),
  blockquote: props => (Tag({ Tag: 'blockquote', props })),
  code: props => (Code(props)),
  dd: props => (Tag({ Tag: 'dd', props })),
  dl: props => (Tag({ Tag: 'dl', props })),
  dt: props => (Tag({ Tag: 'dt', props })),
  h1: props => (HTag({ Tag: 'h1', props })),
  h2: props => (HTag({ Tag: 'h2', props })),
  h3: props => (HTag({ Tag: 'h3', props })),
  h4: props => (HTag({ Tag: 'h4', props })),
  h5: props => (HTag({ Tag: 'h5', props })),
  h6: props => (HTag({ Tag: 'h6', props })),
  hr: props => (Tag({ Tag: 'hr', props })),
  img: props => (Tag({ Tag: 'img', props })),
  input: props => (Tag({ Tag: 'input', props })),
  kbd: props => (Tag({ Tag: 'kbd', props })),
  li: props => (Tag({ Tag: 'li', props })),
  ol: props => (Tag({ Tag: 'ol', props })),
  p: props => (Tag({ Tag: 'p', props })),
  pre: props => (Tag({ Tag: 'pre', props })),
  strong: props => (Tag({ Tag: 'strong', props })),
  table: props => (Tag({ Tag: 'table', props })),
  td: props => (Tag({ Tag: 'td', props })),
  th: props => (Tag({ Tag: 'th', props })),
  tr: props => (Tag({ Tag: 'tr', props })),
  ul: props => (Tag({ Tag: 'ul', props })),
};

/**
 * The MDX provider to have MDX use our base react components.
 */
const TerraMDXProvider = ({ children }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

TerraMDXProvider.propTypes = propTypes;

export default TerraMDXProvider;
