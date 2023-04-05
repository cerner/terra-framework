import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';
import ThemeContext from 'terra-theme-context';

import styles from './ResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function called upon release of the ResizeHandle. The id, as well as the new ResizeHandle position, will be provided
   * as arguments. Parameters: `onResizeStop(resizeHandleId, positionDelta)`
   */
  onResizeStop: PropTypes.func,
  /**
   * Function called upon move of the ResizeHandle.
   * Parameters: `onResizeMove(node)`
   */
  onResizeMove: PropTypes.func,
  /**
   * Function called upon start of the ResizeHandle.
   * Parameters: `onResizeStart(resizeHandleId, positionDelta)`
   */
  onResizeStart: PropTypes.func,
};

const MINIMUM_WORKSPACE_WIDTH = 320;

class ResizeHandle extends React.Component {
  /**
   * Click events that occur on the ResizeHandle are not propagated. This prevents clicks on the ResizeHandle from registering
   * as clicks on the elements over which the ResizeHandle is rendered.
   */
  static preventClickEvent(event) {
    event.stopPropagation();
  }

  constructor(props) {
    super(props);

    this.handleDragMove = this.handleDragMove.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);

    this.resizeBoundsRef = React.createRef();
  }

  handleDragMove(event, data) {
    const { onResizeMove } = this.props;

    const handleNode = data.node;

    this.resizeHandleDragPosition += data.deltaX;

    const newWidth = data.x * -1 + this.resizeBoundsRef.current.currentWidth;
    const scale = (newWidth - MINIMUM_WORKSPACE_WIDTH) / this.resizeBoundsRef.current.range;

    if (scale >= 0 && scale <= 1) {
      handleNode.style.transform = `translate3d(${this.resizeHandleDragPosition}px, 0, 0)`;
    }

    if (onResizeMove) {
      onResizeMove(handleNode);
    }
  }

  handleDragStart(event, data) {
    const { onResizeStart } = this.props;

    const handleNode = data.node;

    this.resizeHandleDragPosition = 0;

    handleNode.classList.add(cx('dragging'));

    if (onResizeStart) {
      onResizeStart((bounds) => {
        this.resizeBoundsRef.current = bounds;
      });
    }
  }

  handleDragStop(event, data) {
    const { onResizeStop } = this.props;
    const handleNode = data.node;

    handleNode.classList.remove(cx('dragging'));
    handleNode.style.transform = '';

    if (onResizeStop) {
      onResizeStop(this.resizeHandleDragPosition);
    }
  }

  render() {
    const theme = this.context;
    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
      <DraggableCore
        onStart={this.handleDragStart}
        onStop={this.handleDragStop}
        onDrag={this.handleDragMove}
      >
        <div
          data-testid="resize-handle"
          className={cx('resize-handle', theme.className)}
          onClick={ResizeHandle.preventClickEvent}
        />
      </DraggableCore>
      /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    );
  }
}

ResizeHandle.propTypes = propTypes;
ResizeHandle.contextType = ThemeContext;

export default ResizeHandle;
