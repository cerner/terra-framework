import React from 'react';
import DisclosureManager, { withDisclosureManager, DisclosureManagerHeaderAdapter, availableDisclosureSizes } from '../../src/DisclosureManager';

const TestChild = withDisclosureManager(({ id }) => <div id={id} />);

describe('DisclosureManager', () => {
  // Snapshot Tests
  it('should render using the provided render function', () => {
    const disclosureManager = (
      <DisclosureManager.WrappedComponent
        render={manager => (
          <div id="wrapper">
            {manager.children.components}
          </div>
        )}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>
    );

    const wrapper = enzyme.mount(disclosureManager);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when trapNestedDisclosureRequests is provided', () => {
    const disclosureManager = (
      <DisclosureManager.WrappedComponent
        render={manager => (
          <div id="wrapper">
            {manager.children.components}
          </div>
        )}
        trapNestedDisclosureRequests
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>
    );

    const wrapper = enzyme.mount(disclosureManager);
    expect(wrapper).toMatchSnapshot();
  });

  const mountDisclosureManager = (disclosureTypes, renderFunc) => enzyme.mount((
    <DisclosureManager.WrappedComponent
      render={renderFunc}
      supportedDisclosureTypes={disclosureTypes}
    >
      <TestChild id="child1" />
      <TestChild id="child2" />
    </DisclosureManager.WrappedComponent>
  ));

  const validateInitialState = (wrapper) => {
    expect(wrapper.state().childComponentDelegate).toBeDefined();
    expect(wrapper.state().disclosureIsOpen).toBeFalsy();
    expect(wrapper.state().disclosureIsFocused).toBeFalsy();
    expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
    expect(wrapper.state().disclosureSize).toBeUndefined();
    expect(wrapper.state().disclosureComponentKeys).toEqual([]);
    expect(wrapper.state().disclosureComponentData).toEqual({});
    expect(wrapper.state().disclosureComponentDelegates).toEqual([]);
  };

  const validateChildDelegate = (wrapper) => {
    const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
    expect(childDisclosureManager1).toBeDefined();
    expect(childDisclosureManager1.disclose).toBeDefined();

    const childDisclosureManager2 = wrapper.find('#child2').getElements()[1].props.disclosureManager;
    expect(childDisclosureManager2).toBeDefined();
    expect(childDisclosureManager2.disclose).toBeDefined();
  };

  const triggerChildDisclose = (wrapper, disclosureOptions = { content: {} }) => (
    new Promise((resolve, reject) => {
      const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
      childDisclosureManager1.disclose({
        preferredType: 'test',
        size: 'large',
        ...disclosureOptions,
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestChild id="disclosure-component" />,
          ...disclosureOptions.content,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();

        const disclosureContentManager = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentManager).toBeDefined();
        expect(disclosureContentManager.disclose).toBeDefined();
        expect(disclosureContentManager.dismiss).toBeDefined();
        expect(disclosureContentManager.closeDisclosure).toBeDefined();
        expect(disclosureContentManager.goBack).toBeUndefined();
        expect(disclosureContentManager.maximize).toBeDefined();
        expect(disclosureContentManager.minimize).toBeUndefined();
        expect(disclosureContentManager.requestFocus).toBeDefined();
        expect(disclosureContentManager.releaseFocus).toBeUndefined();
        expect(disclosureContentManager.registerDismissCheck).toBeDefined();
      })
  );

  // Render Tests
  it('should provide the given children an app prop that should trigger disclosures', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper);
  });

  it('renders disclosed content in the disclosure wrapper', () => {
    const wrapper = enzyme.mount(
      <DisclosureManager.WrappedComponent
        render={(manager) => (
          <div id="content">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        withDisclosureContainer={(content) => (
          <div id="disclosure-container">
            {content}
          </div>
        )}
        supportedDisclosureTypes={['test']}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>,
    );

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper).then(() => {
      expect(wrapper.exists('#disclosure-container')).toBe(true);
    });
  });

  it('renders disclosed content in the disclosure wrapper with default size of "small" when none provided', () => {
    const triggerChildDiscloseDefaultSize = (wrapper) => (
      new Promise((resolve, reject) => {
        const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
        childDisclosureManager1.disclose({
          preferredType: 'test',
          size: null,
          content: {
            key: 'DISCLOSE_KEY',
            component: <TestChild id="disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      })
        .then(() => {
          wrapper.update();
        })
    );

    const wrapper = enzyme.mount(
      <DisclosureManager.WrappedComponent
        render={(manager) => (
          <div id="content">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        withDisclosureContainer={(content) => (
          <div id="disclosure-container">
            {content}
          </div>
        )}
        supportedDisclosureTypes={['test']}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>,
    );

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDiscloseDefaultSize(wrapper).then(() => {
      expect(wrapper.exists('#disclosure-container')).toBe(true);
      expect(wrapper.state().disclosureSize).toBe('small');
    });
  });

  it('renders disclosed content in the disclosure wrapper with a "fusion" size when provided', () => {
    const triggerChildDiscloseFusionSize = (wrapper) => (
      new Promise((resolve, reject) => {
        const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
        childDisclosureManager1.disclose({
          preferredType: 'test',
          size: availableDisclosureSizes.FUSION_MEDIUM,
          content: {
            key: 'DISCLOSE_KEY',
            component: <TestChild id="disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      })
        .then(() => {
          wrapper.update();
        })
    );

    const wrapper = enzyme.mount(
      <DisclosureManager.WrappedComponent
        render={(manager) => (
          <div id="content">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        withDisclosureContainer={(content) => (
          <div id="disclosure-container">
            {content}
          </div>
        )}
        supportedDisclosureTypes={['test']}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>,
    );

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDiscloseFusionSize(wrapper).then(() => {
      expect(wrapper.exists('#disclosure-container')).toBe(true);
      expect(wrapper.state().disclosureSize).toBe('fusion-medium');
    });
  });

  it('renders disclosed content in the disclosure wrapper with default dimensions when invalid height is provided', () => {
    const defaultHeight = 690;
    const defaultWidth = 1120;
    const triggerChildDiscloseInvalidHeight = (wrapper) => (
      new Promise((resolve, reject) => {
        const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
        childDisclosureManager1.disclose({
          preferredType: 'test',
          dimensions: { height: 1234, width: 560 },
          content: {
            key: 'DISCLOSE_KEY',
            component: <TestChild id="disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      })
        .then(() => {
          wrapper.update();
        })
    );

    const wrapper = enzyme.mount(
      <DisclosureManager.WrappedComponent
        render={(manager) => (
          <div id="content">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        withDisclosureContainer={(content) => (
          <div id="disclosure-container">
            {content}
          </div>
        )}
        supportedDisclosureTypes={['test']}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>,
    );

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDiscloseInvalidHeight(wrapper).then(() => {
      expect(wrapper.exists('#disclosure-container')).toBe(true);
      expect(wrapper.state().disclosureDimensions).toEqual({ height: defaultHeight, width: defaultWidth });
    });
  });

  it('renders disclosed content in the disclosure wrapper with default dimensions when invalid width is provided', () => {
    const defaultHeight = 690;
    const defaultWidth = 1120;
    const triggerChildDiscloseInvalidWidth = (wrapper) => (
      new Promise((resolve, reject) => {
        const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
        childDisclosureManager1.disclose({
          preferredType: 'test',
          dimensions: { height: 380, width: 1234 },
          content: {
            key: 'DISCLOSE_KEY',
            component: <TestChild id="disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      })
        .then(() => {
          wrapper.update();
        })
    );

    const wrapper = enzyme.mount(
      <DisclosureManager.WrappedComponent
        render={(manager) => (
          <div id="content">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        withDisclosureContainer={(content) => (
          <div id="disclosure-container">
            {content}
          </div>
        )}
        supportedDisclosureTypes={['test']}
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>,
    );

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDiscloseInvalidWidth(wrapper).then(() => {
      expect(wrapper.exists('#disclosure-container')).toBe(true);
      expect(wrapper.state().disclosureDimensions).toEqual({ height: defaultHeight, width: defaultWidth });
    });
  });

  describe('discloses content with header title', () => {
    it('renders with title', () => {
      const wrapper = mountDisclosureManager(['test'], manager => (
        <div id="wrapper">
          {manager.children.components}
          {manager.disclosure.components}
        </div>
      ));

      return triggerChildDisclose(wrapper, { content: { title: 'test title' } }).then(() => {
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.headerAdapterData).toHaveProperty('title', 'test title');
      });
    });

    it('maintains disclosed title when title is registered with DisclosureManagerHeaderAdapter', () => {
      const wrapper = mountDisclosureManager(['test'], manager => (
        <div id="wrapper">
          {manager.children.components}
          {manager.disclosure.components}
        </div>
      ));

      const ContentWithHeaderAdapter = withDisclosureManager(({ id }) => (
        <div id={id}>
          <DisclosureManagerHeaderAdapter title="DisclosureManagerTitle" collapsibleMenuView={<div id="dummy component" />} />
        </div>
      ));

      const discloseParameters = { content: { title: 'test title', component: <ContentWithHeaderAdapter id="disclosure-component" /> } };
      return triggerChildDisclose(wrapper, discloseParameters).then(() => {
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.headerAdapterData).toHaveProperty('title', 'test title');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.headerAdapterData).toHaveProperty('collapsibleMenuView');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.headerAdapterData.collapsibleMenuView).toBeDefined();
      });
    });
  });

  it('should resolve disclose request with dismissDisclosure/afterDismiss APIs', () => {
    let dismissDisclosureInstance;
    const mockOnDismissHandler = jest.fn();

    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return new Promise((resolve, reject) => {
      const childApp1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
      childApp1.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestChild id="disclosure-component" />,
        },
      }).then(({ dismissDisclosure, afterDismiss }) => {
        dismissDisclosureInstance = dismissDisclosure;

        afterDismiss.then(mockOnDismissHandler);

        resolve();
      }).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        return new Promise((resolve, reject) => {
          dismissDisclosureInstance().then(resolve).catch(reject);
        });
      })
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeFalsy();
        expect(mockOnDismissHandler).toHaveBeenCalled();
      });
  });

  it('should provide the disclosure content with maximize/minimize functionality', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.maximize().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeTruthy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeUndefined();
        expect(disclosureContentApp.maximize).toBeUndefined();
        expect(disclosureContentApp.minimize).toBeDefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      })
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.minimize().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeUndefined();
        expect(disclosureContentApp.maximize).toBeDefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      });
  });

  it('should not provide the disclosure content with maximize/minimize functionality if the size is fullscreen', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return new Promise((resolve, reject) => {
      const childApp1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
      childApp1.disclose({
        preferredType: 'test',
        size: 'fullscreen',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestChild id="disclosure-component" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('fullscreen');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeUndefined();
        expect(disclosureContentApp.maximize).toBeUndefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      });
  });

  it('should provide the disclosure content with requestFocus/releaseFocus functionality', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.requestFocus().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeFalsy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeUndefined();
        expect(disclosureContentApp.maximize).toBeDefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeUndefined();
        expect(disclosureContentApp.releaseFocus).toBeDefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      })
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.releaseFocus().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
        expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeUndefined();
        expect(disclosureContentApp.maximize).toBeDefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      });
  });

  it('should provide the disclosure content with dismiss functionality', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.dismiss().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeFalsy();
        expect(wrapper.state().disclosureIsFocused).toBeFalsy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBeUndefined();
        expect(wrapper.state().disclosureComponentKeys).toEqual([]);
        expect(wrapper.state().disclosureComponentData).toEqual({});
        expect(wrapper.state().disclosureComponentDelegates).toEqual([]);
      });
  });

  it('should provide the disclosure content with closeDisclosure functionality', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.closeDisclosure().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeFalsy();
        expect(wrapper.state().disclosureIsFocused).toBeFalsy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBeUndefined();
        expect(wrapper.state().disclosureComponentKeys).toEqual([]);
        expect(wrapper.state().disclosureComponentData).toEqual({});
        expect(wrapper.state().disclosureComponentDelegates).toEqual([]);
      });
  });

  it('should provide the disclosure content with nested disclose functionality', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.disclose({
          preferredType: 'not-test',
          size: 'huge',
          content: {
            key: 'NESTED',
            component: <TestChild id="nested-disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY', 'NESTED']);
        expect(wrapper.state().disclosureComponentData.NESTED.key).toEqual('NESTED');
        expect(wrapper.state().disclosureComponentData.NESTED.component.props.id).toEqual('nested-disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(2);

        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeDefined();
        expect(disclosureContentApp.maximize).toBeDefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      })
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.goBack().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.NESTED).toBeUndefined();
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);
      });
  });

  it('should prevent components deep within the disclosure stack from dismissing out of turn', () => {
    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    return new Promise((resolve, reject) => {
      const childDisclosureManager1 = wrapper.find('#child1').getElements()[1].props.disclosureManager;
      childDisclosureManager1.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestChild id="disclosure-component" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => new Promise((resolve, reject) => {
        wrapper.update();

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.disclose({
          preferredType: 'not-test',
          size: 'huge',
          content: {
            key: 'NESTED',
            component: <TestChild id="nested-disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY', 'NESTED']);

        const firstDisclosureComponentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
        expect(firstDisclosureComponentApp.dismiss).toBeDefined();

        return expect(firstDisclosureComponentApp.dismiss()).rejects.toEqual(undefined);
      });
  });

  it('should provide the disclosure content with restricted nested disclose functionality if trapNestedDisclosureRequests is enabled', () => {
    const wrapper = enzyme.mount((
      <DisclosureManager.WrappedComponent
        render={manager => (
          <div id="wrapper">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        supportedDisclosureTypes={['test']}
        trapNestedDisclosureRequests
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>
    ));

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.disclose({
          preferredType: 'test',
          size: 'huge',
          content: {
            key: 'NESTED',
            component: <TestChild id="nested-disclosure-component" />,
          },
        }).then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY', 'NESTED']);
        expect(wrapper.state().disclosureComponentData.NESTED.key).toEqual('NESTED');
        expect(wrapper.state().disclosureComponentData.NESTED.component.props.id).toEqual('nested-disclosure-component');
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(2);

        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[1].props.disclosureManager;
        expect(disclosureContentApp).toBeDefined();
        expect(disclosureContentApp.disclose).toBeDefined();
        expect(disclosureContentApp.dismiss).toBeDefined();
        expect(disclosureContentApp.closeDisclosure).toBeDefined();
        expect(disclosureContentApp.goBack).toBeDefined();
        expect(disclosureContentApp.maximize).toBeDefined();
        expect(disclosureContentApp.minimize).toBeUndefined();
        expect(disclosureContentApp.requestFocus).toBeDefined();
        expect(disclosureContentApp.releaseFocus).toBeUndefined();
        expect(disclosureContentApp.registerDismissCheck).toBeDefined();
      })
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[1].props.disclosureManager;

        disclosureContentApp.goBack().then(resolve).catch(reject);
      }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().disclosureIsOpen).toBeTruthy();
        expect(wrapper.state().disclosureIsFocused).toBeTruthy();
        expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
        expect(wrapper.state().disclosureSize).toBe('large');
        expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
        expect(wrapper.state().disclosureComponentData.NESTED).toBeUndefined();
        expect(wrapper.state().disclosureComponentDelegates.length).toEqual(1);
      });
  });

  it('should provide render function with the current state', () => {
    const mockRender = jest.fn();
    mockRender.mockReturnValue(<div />);

    const wrapper = mountDisclosureManager(['test'], mockRender);

    return new Promise((resolve) => {
      wrapper.setState({
        disclosureIsOpen: true,
        disclosureIsFocused: true,
        disclosureIsMaximized: true,
        disclosureSize: 'test-size',
        disclosureComponentKeys: ['testkey'],
        disclosureComponentData: {
          testkey: {
            key: 'content-key',
            component: <div id="disclosure-comp" />,
            headerAdapterData: {},
          },
        },
        disclosureComponents: [<div id="disclosure-comp" />],
      }, resolve);
    })
      .then(() => {
        wrapper.update();

        expect(mockRender.mock.calls.length).toBe(2);

        const firstRenderPayload = mockRender.mock.calls[0][0];
        expect(firstRenderPayload.dismissPresentedComponent).toBeDefined();
        expect(firstRenderPayload.closeDisclosure).toBeDefined();
        expect(firstRenderPayload.disclosureComponentKeys).toEqual([]);
        expect(firstRenderPayload.disclosureComponentData).toEqual({});
        expect(firstRenderPayload.closeDisclosure).toBeDefined();
        expect(firstRenderPayload.maximizeDisclosure).toBeDefined();
        expect(firstRenderPayload.minimizeDisclosure).toBeUndefined();

        expect(firstRenderPayload.children).toBeDefined();
        expect(firstRenderPayload.children.components.props.children.length).toEqual(2);

        expect(firstRenderPayload.disclosure).toBeDefined();
        expect(firstRenderPayload.disclosure.isOpen).toBeFalsy();
        expect(firstRenderPayload.disclosure.isFocused).toBeFalsy();
        expect(firstRenderPayload.disclosure.isMaximized).toBeFalsy();
        expect(firstRenderPayload.disclosure.size).toBeUndefined();
        expect(firstRenderPayload.disclosure.components.length).toEqual(0);

        const secondRenderPayload = mockRender.mock.calls[1][0];
        expect(secondRenderPayload.dismissPresentedComponent).toBeDefined();
        expect(secondRenderPayload.closeDisclosure).toBeDefined();
        expect(secondRenderPayload.disclosureComponentKeys).toEqual(['testkey']);
        expect(secondRenderPayload.disclosureComponentData).toBeDefined();
        expect(secondRenderPayload.disclosureComponentData.testkey.component).toBeDefined();
        expect(secondRenderPayload.disclosureComponentData.testkey.headerAdapterData).toBeDefined();
        expect(secondRenderPayload.maximizeDisclosure).toBeUndefined();
        expect(secondRenderPayload.minimizeDisclosure).toBeDefined();

        expect(secondRenderPayload.children).toBeDefined();
        expect(secondRenderPayload.children.components.props.children.length).toEqual(2);

        expect(secondRenderPayload.disclosure).toBeDefined();
        expect(secondRenderPayload.disclosure.isOpen).toBeTruthy();
        expect(secondRenderPayload.disclosure.isFocused).toBeTruthy();
        expect(secondRenderPayload.disclosure.isMaximized).toBeTruthy();
        expect(secondRenderPayload.disclosure.size).toEqual('test-size');
        expect(secondRenderPayload.disclosure.components.length).toEqual(1);
      });
  });

  it('should provide afterDismiss promise to resolve after dismissing', async () => {
    let dismissDisclosureInstance;
    let afterDismissPromise;
    let childApp2DisclosureManager;

    const wrapper = mountDisclosureManager(['test'], manager => (
      <div id="wrapper">
        {manager.children.components}
        {manager.disclosure.components}
      </div>
    ));

    validateInitialState(wrapper);
    validateChildDelegate(wrapper);

    await new Promise((resolve, reject) => {
      const childApp1DisclosureManager = wrapper.find('#child1').getElements()[1].props.disclosureManager;
      childApp1DisclosureManager.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestChild id="component-B" />,
        },
      }).then(resolve).catch(reject);
    });

    wrapper.update();

    await new Promise((resolve, reject) => {
      childApp2DisclosureManager = wrapper.find('#component-B').getElements()[1].props.disclosureManager;
      childApp2DisclosureManager.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'Nested',
          component: <TestChild id="component-C" />,
        },
      }).then(({ dismissDisclosure, afterDismiss }) => {
        dismissDisclosureInstance = dismissDisclosure;
        afterDismissPromise = afterDismiss;
        resolve();
      }).catch(reject);
    });

    wrapper.update();

    expect(wrapper.state().disclosureIsOpen).toBeTruthy();
    expect(wrapper.state().disclosureIsFocused).toBeTruthy();
    expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
    expect(wrapper.state().disclosureSize).toBe('large');
    expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY', 'Nested']);
    expect(wrapper.state().disclosureComponentData.Nested.key).toEqual('Nested');
    expect(wrapper.state().disclosureComponentData.Nested.component.props.id).toEqual('component-C');
    expect(wrapper.state().disclosureComponentDelegates.length).toEqual(2);

    /**
     * Due to the asynchronous execution of the afterDismiss promise, failed expectations
     * within the promise handler cannot actually fail the test. Instead, we use a flag to
     * and write expectations around the flag after awaiting the promise below.
     */
    let afterDismissResolvedAfterStateUpdate = false;
    afterDismissPromise.then(() => {
      if (wrapper.state().disclosureComponentKeys.indexOf('Nested') === -1) {
        afterDismissResolvedAfterStateUpdate = true;
      }
    });

    await dismissDisclosureInstance();
    await expect(afterDismissPromise).resolves.toBe(undefined);

    expect(afterDismissResolvedAfterStateUpdate).toBeTruthy();

    await childApp2DisclosureManager.closeDisclosure();

    wrapper.update();

    expect(wrapper.state().disclosureIsOpen).toBeFalsy();
  });

  it('should provide registerDismissCheck to disclosed contents', async () => {
    const wrapper = enzyme.mount((
      <DisclosureManager.WrappedComponent
        render={manager => (
          <div id="wrapper">
            {manager.children.components}
            {manager.disclosure.components}
          </div>
        )}
        supportedDisclosureTypes={['test']}
        trapNestedDisclosureRequests
      >
        <TestChild id="child1" />
        <TestChild id="child2" />
      </DisclosureManager.WrappedComponent>
    ));

    await triggerChildDisclose(wrapper);
    wrapper.update();

    const disclosedContentManager = wrapper.find('#disclosure-component').getElements()[1].props.disclosureManager;
    expect(disclosedContentManager.registerDismissCheck).toBeDefined();

    const testDismissCheck = jest.fn();

    await disclosedContentManager.registerDismissCheck(testDismissCheck);

    expect(wrapper.instance().dismissChecks.DISCLOSE_KEY).toEqual(testDismissCheck);
  });
});
