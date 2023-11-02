import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ActionHeader from 'terra-action-header';

import TreeItem from './subcomponents/TreeItem';
import styles from './FolderTree.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of FolderTree.Items to be displayed as content within the FolderTree.
   */
  children: PropTypes.node.isRequired,
  /**
   * The title of the folder tree. TODO: improve this description
   */
  title: PropTypes.string,
};

const FolderTree = ({ children, title }) => {
  console.log(children);
  
  return (
    <>
      <ActionHeader
        id="folder-tree-header" // TODO: may need to update this to use unique IDs
        text={title}
        level={3}
      />
      <ul
        className={cx('folder-tree')}
        role="tree"
        aria-labelledby="folder-tree-header"
      >
        {children}
      </ul>
    </>
  );
};

FolderTree.propTypes = propTypes;

FolderTree.TreeItem = TreeItem;

export default FolderTree;
