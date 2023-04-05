import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_ESCAPE } from 'keycode-js';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
import ThemeContext from 'terra-theme-context';

import { ActiveBreakpointContext } from '../../../breakpoints';
import ResizeHandle from './ResizeHandle';
import { ApplicationIntlContext } from '../../../application-intl';
import ApplicationNavigationActionsContext from '../../ApplicationNavigationActionsContext';

import styles from './WorkspaceLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child content to be rendered in the main content region of the workspace layout.
   */
  children: PropTypes.node,
  /**
   * React ref mapping to back to portaling of the child content.
   */
  contentElementRef: PropTypes.object,
  /**
   * Unique id for the layout.
   */
  id: PropTypes.string.isRequired,
  /**
   * Element adhering to the Workspace API.
   */
  workspace: PropTypes.element,
  /**
   * Returns the composed skipTo action function if workspace is present.
   */
  skipToCallback: PropTypes.func,
};

const MINIMUM_WORKSPACE_WIDTH = 320;
const MINIMUM_CONTENT_WIDTH = 320;

const initialSizeForBreakpoint = breakpoint => {
  if (breakpoint === 'tiny' || breakpoint === 'small') {
    return {
      scale: undefined,
      type: undefined,
    };
  }

  if (breakpoint === 'medium') {
    return {
      scale: undefined,
      type: 'split',
    };
  }

  return {
    scale: 0,
    type: undefined,
  };
};

const getSizeOptionsForBreakpoint = breakpoint => {
  let menuOptions;
  if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
    menuOptions = [
      { key: 'small', text: 'Small' },
      { key: 'medium', text: 'Medium' },
      { key: 'large', text: 'Large' },
    ];
  } else if (breakpoint === 'medium') {
    menuOptions = [
      { key: 'split', text: 'Split' },
      { key: 'overlay', text: 'Overlay' },
    ];
  }
  return menuOptions;
};

const getActiveSizeForWorkspaceSize = workspaceSize => {
  if (workspaceSize.scale === 0) {
    return 'small';
  } if (workspaceSize.scale === 0.5) {
    return 'medium';
  } if (workspaceSize.scale === 1) {
    return 'large';
  } if (workspaceSize.type === 'split') {
    return 'split';
  } if (workspaceSize.type === 'overlay') {
    return 'overlay';
  }

  return undefined;
};

const validateInitialWorkspaceSizeForBreakpoint = (breakpoint) => {
  if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
    return true;
  }

  return false;
};

const WorkspaceLayout = ({
  children,
  id,
  workspace,
  contentElementRef,
  skipToCallback,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  const layoutContainerRef = React.useRef();
  const layoutBodyRef = React.useRef();
  const workspacePanelRef = React.useRef();
  const workspaceHeadingRef = React.useRef();
  const workspaceResizeBoundsRef = React.useRef();
  const resizeOverlayRef = React.useRef();
  const workspaceOverlayRef = React.useRef();
  const lastActiveSizeRef = React.useRef();
  const userSelectedTypeRef = React.useRef();
  const userSelectedScaleRef = React.useRef(0);

  let initialWorkspaceSize;
  if (validateInitialWorkspaceSizeForBreakpoint(activeBreakpoint)) {
    initialWorkspaceSize = (workspace && workspace.props.initialSize) || initialSizeForBreakpoint(activeBreakpoint);
  } else {
    initialWorkspaceSize = initialSizeForBreakpoint(activeBreakpoint);
  }

  const [workspaceSize, setWorkspaceSize] = React.useState(initialWorkspaceSize);
  const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  const isLargeFormFactor = activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous';
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(!hasOverlayWorkspace && workspace && workspace.props.initialIsOpen);
  const hasWorkspace = !!workspace;

  const actionsContextValue = React.useMemo(() => {
    let actions = [];
    let actionLabel;
    if (workspaceIsVisible) {
      actionLabel = applicationIntl.formatMessage({ id: 'terraApplication.workspace.showWorkspaceLabel' });
    } else {
      actionLabel = applicationIntl.formatMessage({ id: 'terraApplication.workspace.hideWorkspaceLabel' });
    }

    if (hasWorkspace) {
      actions = [...actions, {
        key: 'workspace-layout-toggle-workspace-panel',
        label: actionLabel,
        icon: workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />,
        onSelect: () => {
          setWorkspaceIsVisible(state => !state);
        },
      }];
    }

    return ({
      actions,
    });
  }, [hasWorkspace, workspaceIsVisible, applicationIntl]);

  React.useEffect(() => {
    if (!lastActiveSizeRef.current) {
      lastActiveSizeRef.current = activeBreakpoint;
      return;
    }

    if (lastActiveSizeRef.current === activeBreakpoint) {
      return;
    }

    lastActiveSizeRef.current = activeBreakpoint;

    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
      setWorkspaceSize({
        scale: undefined,
        type: undefined,
      });
    } else if (activeBreakpoint === 'medium') {
      const scale = userSelectedScaleRef.current || workspaceSize.scale;

      if (scale === undefined || scale <= 0.5) {
        setWorkspaceSize({
          scale: undefined,
          type: 'split',
        });
      } else if (scale > 0.5) {
        setWorkspaceSize({
          scale: undefined,
          type: 'overlay',
        });
      }
    } else if (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') {
      setWorkspaceSize({
        scale: userSelectedScaleRef.current || 0,
        type: undefined,
      });
    }
  }, [workspaceSize, activeBreakpoint]);

  const lastWorkspaceOpenState = React.useRef(workspaceIsVisible);
  React.useEffect(() => {
    if (workspaceIsVisible && !lastWorkspaceOpenState.current && workspaceHeadingRef.current) {
      setTimeout(() => { workspaceHeadingRef.current.focus(); }, 0);
    } else if (!workspaceIsVisible && lastWorkspaceOpenState.current) {
      setTimeout(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.focus();
        }
      }, 0);
    }

    lastWorkspaceOpenState.current = workspaceIsVisible;
  }, [workspaceIsVisible]);

  React.useEffect(() => {
    if (!workspaceIsVisible || !hasOverlayWorkspace) {
      return undefined;
    }

    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE) {
        if (e.target === layoutContainerRef.current || layoutContainerRef.current.contains(e.target)) {
          setWorkspaceIsVisible(false);
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [workspaceIsVisible, hasOverlayWorkspace]);

  const handleOnRequestSizeChange = size => {
    userSelectedTypeRef.current = undefined;

    if (size === 'small') {
      userSelectedScaleRef.current = 0;
      setWorkspaceSize({
        scale: 0,
        type: undefined,
      });
    } else if (size === 'medium') {
      userSelectedScaleRef.current = 0.5;

      setWorkspaceSize({
        scale: 0.5,
        type: undefined,
      });
    } else if (size === 'large') {
      userSelectedScaleRef.current = 1.0;

      setWorkspaceSize({
        scale: 1.0,
        type: undefined,
      });
    } else if (size === 'split') {
      userSelectedTypeRef.current = 'split';

      setWorkspaceSize({
        scale: undefined,
        type: 'split',
      });
    } else if (size === 'overlay') {
      userSelectedTypeRef.current = 'overlay';

      setWorkspaceSize({
        scale: undefined,
        type: 'overlay',
      });
    }
  };

  const clonePropsOntoWorkspace = () => (
    React.cloneElement(workspace, {
      id: `${id}-workspace-container`,
      isOpen: workspaceIsVisible,
      onRequestClose: () => {
        setWorkspaceIsVisible(false);
      },
      isPresentedAsOverlay: hasOverlayWorkspace,
      sizeScalar: workspaceSize.scale,
      activeSize: getActiveSizeForWorkspaceSize(workspaceSize),
      sizeOptions: getSizeOptionsForBreakpoint(activeBreakpoint),
      onRequestSizeChange: handleOnRequestSizeChange,
    })
  );

  React.useEffect(() => {
    if (!skipToCallback) {
      return;
    }

    const skipToAction = () => {
      if (!workspaceIsVisible) {
        setWorkspaceIsVisible(true);
      } else {
        setTimeout(() => {
          workspaceHeadingRef.current.focus();
        }, 0);
      }
    };

    skipToCallback(skipToAction);
  }, [skipToCallback, workspaceIsVisible]);

  const renderResizeHandle = () => {
    if (!isLargeFormFactor) {
      return undefined;
    }

    return (
      <div className={cx('resize-handle-frame')}>
        <ResizeHandle
          onResizeStart={(registerBounds) => {
            resizeOverlayRef.current.style.display = 'block';

            workspaceResizeBoundsRef.current = {
              range: layoutBodyRef.current.getBoundingClientRect().width - MINIMUM_CONTENT_WIDTH - MINIMUM_WORKSPACE_WIDTH,
              currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
            };

            registerBounds({
              range: layoutBodyRef.current.getBoundingClientRect().width - MINIMUM_CONTENT_WIDTH - MINIMUM_WORKSPACE_WIDTH,
              currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
            });
          }}
          onResizeStop={(position) => {
            resizeOverlayRef.current.style.display = 'none';

            const newWidth = position * -1 + workspaceResizeBoundsRef.current.currentWidth;
            const scale = (newWidth - MINIMUM_WORKSPACE_WIDTH) / workspaceResizeBoundsRef.current.range;

            userSelectedTypeRef.current = undefined;

            if (scale >= 1) {
              userSelectedScaleRef.current = 1.0;

              setWorkspaceSize({
                scale: 1.0,
                type: undefined,
              });
            } else if (scale < 0) {
              userSelectedScaleRef.current = 0;

              setWorkspaceSize({
                scale: 0,
                type: undefined,
              });
            } else {
              userSelectedScaleRef.current = scale;

              setWorkspaceSize({
                scale,
                type: undefined,
              });
            }
          }}
        />
      </div>
    );
  };

  const renderWorkspaceOverlay = () => {
    if (!workspaceIsVisible || !hasOverlayWorkspace) {
      return undefined;
    }

    return (
      <div
        role="none"
        ref={workspaceOverlayRef}
        className={cx('workspace-overlay-negative-space')}
        onClick={() => { setWorkspaceIsVisible(false); }} // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      />
    );
  };

  const renderContent = () => (
    <div
      id={`${id}-content-body`}
      className={cx('content-body')}
      ref={contentElementRef}
      style={workspaceSize.scale !== undefined && workspaceIsVisible ? { flexGrow: `${1 - workspaceSize.scale}`, msFlexPositive: `${1 - workspaceSize.scale}` } : null} // eslint-disable-line react/forbid-dom-props
      inert={hasOverlayWorkspace && workspaceIsVisible ? 'true' : null}
    >
      <ApplicationNavigationActionsContext.Provider value={actionsContextValue}>
        {children}
      </ApplicationNavigationActionsContext.Provider>
    </div>
  );

  const renderWorkspace = () => {
    if (!workspace) {
      return undefined;
    }

    return (
      <>
        {renderResizeHandle()}
        <div
          id={`${id}-workspace-body`}
          ref={workspacePanelRef}
          className={cx('workspace-body', { visible: workspaceIsVisible, overlay: hasOverlayWorkspace })}
          style={workspaceSize.scale !== undefined ? { flexGrow: `${workspaceSize.scale}` } : null} // eslint-disable-line react/forbid-dom-props
        >
          <h1
            tabIndex="-1"
            className={cx('visually-hidden-heading')}
            ref={workspaceHeadingRef}
          >
            {applicationIntl.formatMessage({ id: 'terraApplication.workspace.workspaceLabel' })}
          </h1>
          <div
            className={cx('workspace-inner')}
          >
            {clonePropsOntoWorkspace()}
          </div>
        </div>
        {renderWorkspaceOverlay()}
      </>
    );
  };

  return (
    <div
      id={id}
      className={cx('layout-container', theme.className)}
      ref={layoutContainerRef}
    >
      <div ref={layoutBodyRef} className={cx('layout-body')}>
        {renderContent()}
        {renderWorkspace()}
      </div>
      <div
        ref={resizeOverlayRef}
        className={cx('resize-overlay')}
      />
    </div>
  );
};

WorkspaceLayout.propTypes = propTypes;

export default WorkspaceLayout;
