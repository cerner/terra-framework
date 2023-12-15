import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ActionHeader from 'terra-action-header';

import styles from './FolderTree.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of FolderTree.Items to be displayed as content within the FolderTree.
   */
  children: PropTypes.node,
  /**
   * The title of the folder tree.
   */
  title: PropTypes.string.isRequired,
  /**
   * The heading level for the title of the folder tree.
   */
  headerLevel: PropTypes.number,
};

const defaultProps = {
  headerLevel: 3,
};

const FolderTree = ({ children, title, headerLevel }) => (
  <>
    <ActionHeader
      text={title}
      level={headerLevel}
    />
    <ul
      className={cx('folder-tree')}
      role="tree"
      aria-label={title}
    >
      {children}
    </ul>
  </>
);

FolderTree.propTypes = propTypes;
FolderTree.defaultProps = defaultProps;

export default FolderTree;
