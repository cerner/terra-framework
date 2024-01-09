import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import * as KeyCode from 'keycode-js';

import ActionHeader from 'terra-action-header';
import Button from 'terra-button';
import Toolbar from 'terra-toolbar';
import { IconCollapseRow, IconExpandRow } from 'terra-icon';

import FolderTreeUtils from './FolderTreeUtils';
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
  const listNode = useRef();

  const handleKeyDown = event => {
    const listItems = listNode.current.querySelectorAll('[data-item-show-focus=true]');
    // Remove all hidden list items
    const visibleListItems = Array.prototype.slice.call(listItems).filter((item) => {
      let parent = item.parentNode;
      while (parent && parent !== listNode.current) {
        if (parent.hasAttribute('hidden')) {
          return false;
        }
        parent = parent.parentNode;
      }
      return true;
    });
    const currentIndex = Array.from(visibleListItems).indexOf(event.target);
    const lastIndex = visibleListItems.length - 1;

    const handleHomeKey = () => FolderTreeUtils.handleMoveFocus(visibleListItems[currentIndex], visibleListItems[0]);
    const handleEndKey = () => FolderTreeUtils.handleMoveFocus(visibleListItems[currentIndex], visibleListItems[lastIndex]);

    switch (event.keyCode) {
      case KeyCode.KEY_END:
        event.preventDefault();
        handleEndKey();
        break;
      case KeyCode.KEY_HOME:
        event.preventDefault();
        handleHomeKey();
        break;
      case KeyCode.KEY_UP: {
        event.preventDefault();
        const previousIndex = currentIndex - 1;
        FolderTreeUtils.handleMoveFocus(visibleListItems[currentIndex], visibleListItems[previousIndex]);
        break;
      }
      case KeyCode.KEY_DOWN: {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        FolderTreeUtils.handleMoveFocus(visibleListItems[currentIndex], visibleListItems[nextIndex]);
        break;
      }
      case KeyCode.KEY_LEFT: {
        event.preventDefault();
        if (event.metaKey) {
          // Mac: Cmd + Left
          // Win: Home
          handleHomeKey();
          break;
        }
        break;
      }
      case KeyCode.KEY_RIGHT: {
        event.preventDefault();
        if (event.metaKey) {
          // Mac: Cmd + Right
          // Win: End
          handleEndKey();
          break;
        }
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const listItems = listNode.current.querySelectorAll('[data-item-show-focus=true]');
    listItems[0].tabIndex = 0;
  }, []);

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
        ref={listNode}
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
