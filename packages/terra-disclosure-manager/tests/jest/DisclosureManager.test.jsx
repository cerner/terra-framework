import React from 'react';
import DisclosureManager from '../../src/DisclosureManager';

describe('DisclosureManager', () => {
  // Snapshot Tests
  it('should render using the provided render function', () => {
    const disclosureManager = (
      <DisclosureManager
        render={manager => (
          <div id="wrapper">
            {manager.children.components}
          </div>
        )}
      >
        <div id="child1" />
        <div id="child2" />
      </DisclosureManager>
    );

    const wrapper = shallow(disclosureManager);
    expect(wrapper).toMatchSnapshot();
  });

  const mountDisclosureManager = (diclosureTypes, renderFunc) => shallow((
    <DisclosureManager
      render={renderFunc}
      supportedDisclosureTypes={diclosureTypes}
    >
      <div id="child1" />
      <div id="child2" />
    </DisclosureManager>
  ));

  const validateInitialState = (wrapper) => {
    expect(wrapper.state().disclosureIsOpen).toBeFalsy();
    expect(wrapper.state().disclosureIsFocused).toBeTruthy();
    expect(wrapper.state().disclosureIsMaximized).toBeFalsy();
    expect(wrapper.state().disclosureSize).toBeUndefined();
    expect(wrapper.state().disclosureComponentKeys).toEqual([]);
    expect(wrapper.state().disclosureComponentData).toEqual({});
  };

  const validateChildAppDelegate = (wrapper) => {
    const childApp1 = wrapper.find('#child1').getElements()[0].props.app;
    expect(childApp1).toBeDefined();
    expect(childApp1.disclose).toBeDefined();

    const childApp2 = wrapper.find('#child2').getElements()[0].props.app;
    expect(childApp2).toBeDefined();
    expect(childApp2.disclose).toBeDefined();
  };

  const triggerChildDisclose = wrapper => (
    new Promise((resolve, reject) => {
      const childApp1 = wrapper.find('#child1').getElements()[0].props.app;
      childApp1.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <div id="disclosure-component" />,
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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper);
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
    validateChildAppDelegate(wrapper);

    return new Promise((resolve, reject) => {
      const childApp1 = wrapper.find('#child1').getElements()[0].props.app;
      childApp1.disclose({
        preferredType: 'test',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <div id="disclosure-component" />,
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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
    validateChildAppDelegate(wrapper);

    return new Promise((resolve, reject) => {
      const childApp1 = wrapper.find('#child1').getElements()[0].props.app;
      childApp1.disclose({
        preferredType: 'test',
        size: 'fullscreen',
        content: {
          key: 'DISCLOSE_KEY',
          component: <div id="disclosure-component" />,
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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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

        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

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
    validateChildAppDelegate(wrapper);

    return triggerChildDisclose(wrapper)
      .then(() => new Promise((resolve, reject) => {
        const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

        disclosureContentApp.disclose({
          preferredType: 'test',
          size: 'huge',
          content: {
            key: 'NESTED',
            component: <div id="nested-disclosure-component" />,
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

        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[0].props.app;
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
        const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[0].props.app;

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
          },
        },
      }, resolve);
    })
      .then(() => {
        wrapper.update();

        expect(mockRender.mock.calls.length).toBe(2);

        const firstRenderPayload = mockRender.mock.calls[0][0];
        expect(firstRenderPayload.dismissPresentedComponent).toBeDefined();
        expect(firstRenderPayload.closeDisclosure).toBeDefined();
        expect(firstRenderPayload.children).toBeDefined();
        expect(firstRenderPayload.children.components.length).toEqual(2);

        expect(firstRenderPayload.disclosure).toBeDefined();
        expect(firstRenderPayload.disclosure.isOpen).toBeFalsy();
        expect(firstRenderPayload.disclosure.isFocused).toBeTruthy();
        expect(firstRenderPayload.disclosure.isMaximized).toBeFalsy();
        expect(firstRenderPayload.disclosure.size).toBeUndefined();
        expect(firstRenderPayload.disclosure.components.length).toEqual(0);

        const secondRenderPayload = mockRender.mock.calls[1][0];
        expect(secondRenderPayload.dismissPresentedComponent).toBeDefined();
        expect(secondRenderPayload.closeDisclosure).toBeDefined();
        expect(secondRenderPayload.children).toBeDefined();
        expect(secondRenderPayload.children.components.length).toEqual(2);

        expect(secondRenderPayload.disclosure).toBeDefined();
        expect(secondRenderPayload.disclosure.isOpen).toBeTruthy();
        expect(secondRenderPayload.disclosure.isFocused).toBeTruthy();
        expect(secondRenderPayload.disclosure.isMaximized).toBeTruthy();
        expect(secondRenderPayload.disclosure.size).toEqual('test-size');
        expect(secondRenderPayload.disclosure.components.length).toEqual(1);
      });
  });
});
