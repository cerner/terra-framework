import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

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
      >
        {children}
      </ul>
    </div>
  );
};

FolderTree.propTypes = propTypes;
FolderTree.defaultProps = defaultProps;

export default injectIntl(FolderTree);
