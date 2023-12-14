import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';

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

const FolderTree = (props) => {
  const {
    children,
    title,
    headerLevel,
  } = props;

  let listNode = useRef();

  const handleListRef = (node) => {
    // if (refCallback) {
    //   refCallback(node);
    // }
    listNode = node;
  };

  const handleKeyDown = event => {
    console.log('folder tree key down detected.');

    const listItems = listNode.querySelectorAll('[data-item-show-focus=true]');
    const currentIndex = Array.from(listItems).indexOf(event.target);
    const lastIndex = listItems.length - 1;
    console.log('listItems', listItems);
    console.log('currentIndex', currentIndex);

    const handleHomeKey = () => listItems[0].focus();
    const handleEndKey = () => listItems[lastIndex].focus();

    switch (event.nativeEvent.keyCode) {
      case KeyCode.KEY_END:
        event.preventDefault();
        console.log('END pressed.');

        handleEndKey();

        break;
      case KeyCode.KEY_HOME:
        event.preventDefault();
        console.log('HOME pressed.');

        handleHomeKey();

        break;
      case KeyCode.KEY_UP: {
        event.preventDefault();
        console.log('UP pressed.');

        const previousIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
        listItems[previousIndex]?.focus();

        break;
      }
      case KeyCode.KEY_DOWN: {
        event.preventDefault();
        console.log('DOWN pressed.');

        const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
        listItems[nextIndex]?.focus();

        break;
      }
      case KeyCode.KEY_LEFT: {
        event.preventDefault();
        if (event.metaKey) {
          // Mac: Cmd + Left
          // Win: Home
          console.log('HOME pressed.');

          handleHomeKey();

          break;
        }
        console.log('LEFT pressed.');



        break;
      }
      case KeyCode.KEY_RIGHT: {
        event.preventDefault();

        if (event.metaKey) {
          // Mac: Cmd + Right
          // Win: End
          console.log('END pressed.');

          handleEndKey();

          break;
        }
        console.log('RIGHT pressed.');



        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <ActionHeader
        text={title}
        level={headerLevel}
      />
      <ul
        className={cx('folder-tree')}
        role="tree"
        aria-label={title}
        ref={handleListRef}
        onKeyDown={handleKeyDown}
      >
        {children}
      </ul>
    </>
  );
};

FolderTree.propTypes = propTypes;
FolderTree.defaultProps = defaultProps;

export default FolderTree;
