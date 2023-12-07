import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';

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
}) => (
  <>
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
        text={intl.formatMessage({ id: 'Terra.folder-tree.button.expand-all' })}
        variant="utility"
        icon={<IconExpandRow />}
        onClick={onExpandAll}
      />
      <Button
        text={intl.formatMessage({ id: 'Terra.folder-tree.button.collapse-all' })}
        variant="utility"
        icon={<IconCollapseRow />}
        onClick={onCollapseAll}
      />
    </Toolbar>
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

export default injectIntl(FolderTree);
