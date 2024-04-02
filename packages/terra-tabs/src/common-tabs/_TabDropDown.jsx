import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import onClickOutside from 'react-onclickoutside';
import { KEY_ESCAPE } from 'keycode-js';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import styles from './TabDropDown.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Currently active HiddenTabs be displayed.
   */
  children: PropTypes.node,
  /**
   * The id of the tab to be used in mapping.
   */
  isOpen: PropTypes.bool,
  /**
   * The function returning the html node.
   */
  refCallback: PropTypes.func.isRequired,
  /**
   * @private
   * The function callback when a click outside event occurs.
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * The function callback for disable.
   */
  disableOnClickOutside: PropTypes.func,
  /**
   * @private
   * The function callback for enable.
   */
  enableOnClickOutside: PropTypes.func,
  /**
   * Whether or not the tab is draggable.
   */
  isDraggable: PropTypes.bool,
  /**
    * Callback function triggered when tab is drag and dropped .
    */
  onTabOrderChange: PropTypes.func,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const TabDropDown = ({
  isOpen,
  children,
  onRequestClose,
  refCallback,
  disableOnClickOutside,
  enableOnClickOutside,
  isDraggable,
  onTabOrderChange,
  intl,
}) => {
  const dropDownRef = useRef();
  const handleKeyDown = useCallback(event => {
    if (event.keyCode === KEY_ESCAPE && onRequestClose) {
      onRequestClose(event);
    }
  }, [onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      enableOnClickOutside();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
      dropDownRef.current.scrollTop = 0;
      dropDownRef.current.style.left = 0;
    }

    return (() => {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
    });
  }, [isOpen, enableOnClickOutside, disableOnClickOutside, handleKeyDown]);

  TabDropDown.handleClickOutside = event => onRequestClose(event);

  const handleDragEnd = (result, provided) => {
    if (!result.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.tabs.cancelDrag' }, { startPosition: result.source.index }));
      return;
    }
    dropDownRef.current.setAttribute('data-terra-menu-drag-focus', 'false');
    provided.announce(intl.formatMessage({ id: 'Terra.tabs.drop' }, { startPosition: result.source.index, endPosition: result.destination.index }));
    if (onTabOrderChange) {
      onTabOrderChange(result);
    }
  };

  const handleDragStart = (start, provided) => {
    provided.announce(intl.formatMessage({ id: 'Terra.tabs.lift' }, { startPosition: start.source.index }));
    dropDownRef.current.setAttribute('data-terra-menu-drag-focus', 'true');
  };

  const handleDragUpdate = (update, provided) => {
    if (update.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.tabs.drag' }, { startPosition: update.source.index, endPosition: update.destination.index }));
    }
  };

  const theme = React.useContext(ThemeContext);
  const dropDownClassNames = cx(
    'drop-down',
    { 'is-open': isOpen },
    theme.className,
  );
  if (isDraggable) {
    return (
      <DragDropContext onDragStart={handleDragStart} onDragUpdate={handleDragUpdate} onDragEnd={handleDragEnd}>
        <Droppable className={dropDownClassNames} droppableId="tab-list" direction="vertical">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={node => { provided.innerRef(node); dropDownRef.current = node; refCallback(node); }}
              role="none"
              className={dropDownClassNames}
              onMouseDown={e => { e.preventDefault(); }}
            >
              {children}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  return (
    <div
      ref={node => { dropDownRef.current = node; refCallback(node); }}
      role="none"
      className={dropDownClassNames}
      onMouseDown={e => { e.preventDefault(); }}
    >
      {children}
    </div>
  );
};

TabDropDown.propTypes = propTypes;

const clickOutsideConfig = {
  handleClickOutside: () => TabDropDown.handleClickOutside,
};
const wrappedTabDropDown = injectIntl(TabDropDown);
export default onClickOutside(wrappedTabDropDown, clickOutsideConfig);
