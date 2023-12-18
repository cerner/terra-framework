import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import * as KeyCode from 'keycode-js';

import ActionHeader from 'terra-action-header';
import Button from 'terra-button';
import Toolbar from 'terra-toolbar';
import { IconCollapseRow, IconExpandRow } from 'terra-icon';

import styles from './FolderTree.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of FolderTree.Items to be displayed as content within the FolderTree.
   */
  children: PropTypes.node,
  /**
   * The heading level for the title of the folder tree.
   */
  headerLevel: PropTypes.number,
  /**
   * The title of the folder tree.
   */
  title: PropTypes.string.isRequired,
  /**
   * Callback function for expand all event.
   */
  onExpandAll: PropTypes.func,
  /**
   * Callback function for collapse all event.
   */
  onCollapseAll: PropTypes.func,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  headerLevel: 3,
};

const FolderTree = ({
  children,
  headerLevel,
  title,
  onExpandAll,
  onCollapseAll,
  intl,
}) => {
  const folderTreeID = `folder-tree-${uuidv4()}`;

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
    <div className="folder-tree-container">
      <ActionHeader
        text={title}
        level={headerLevel}
      />
      <Toolbar
        align="end"
        ariaControls={title}
        ariaLabel={title}
      >
        <Button
          title={intl.formatMessage({ id: 'Terra.folder-tree.button.expand-all' })}
          text={intl.formatMessage({ id: 'Terra.folder-tree.button.expand-all-instructions' })}
          variant="utility"
          icon={<IconExpandRow />}
          onClick={onExpandAll}
          aria-controls={folderTreeID}
        />
        <Button
          title={intl.formatMessage({ id: 'Terra.folder-tree.button.collapse-all' })}
          text={intl.formatMessage({ id: 'Terra.folder-tree.button.collapse-all-instructions' })}
          variant="utility"
          icon={<IconCollapseRow />}
          onClick={onCollapseAll}
          aria-controls={folderTreeID}
        />
      </Toolbar>
      <ul
        id={folderTreeID}
        className={cx('folder-tree')}
        role="tree"
        aria-label={title}
        ref={handleListRef}
        onKeyDown={handleKeyDown}
      >
        {children}
      </ul>
    </div>
  );
};

FolderTree.propTypes = propTypes;
FolderTree.defaultProps = defaultProps;

export default injectIntl(FolderTree);
