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
    expect(wrapper.state().disclosureIsOpen).toBe(false);
    expect(wrapper.state().disclosureIsFocused).toBe(true);
    expect(wrapper.state().disclosureIsMaximized).toBe(false);
    expect(wrapper.state().disclosureSize).toBe('small');
    expect(wrapper.state().disclosureComponentKeys).toEqual([]);
    expect(wrapper.state().disclosureComponentData).toEqual({});
  };

  const validateChildAppDelegate = (wrapper) => {
    const childApp1 = wrapper.find('#child1').getElements()[0].props.app;
    expect(childApp1).not.toBe(undefined);
    expect(childApp1.disclose).not.toBe(undefined);

    const childApp2 = wrapper.find('#child2').getElements()[0].props.app;
    expect(childApp2).not.toBe(undefined);
    expect(childApp2.disclose).not.toBe(undefined);
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

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');

      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).toBe(undefined);
      expect(disclosureContentApp.maximize).not.toBe(undefined);
      expect(disclosureContentApp.minimize).toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
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

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(true);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');

      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).toBe(undefined);
      expect(disclosureContentApp.maximize).toBe(undefined);
      expect(disclosureContentApp.minimize).not.toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
    })
    .then(() => new Promise((resolve, reject) => {
      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

      disclosureContentApp.minimize().then(resolve).catch(reject);
    }))
    .then(() => {
      wrapper.update();

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');

      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).toBe(undefined);
      expect(disclosureContentApp.maximize).not.toBe(undefined);
      expect(disclosureContentApp.minimize).toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
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

      disclosureContentApp.releaseFocus().then(resolve).catch(reject);
    }))
    .then(() => {
      wrapper.update();

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(false);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');

      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).toBe(undefined);
      expect(disclosureContentApp.maximize).not.toBe(undefined);
      expect(disclosureContentApp.minimize).toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
    })
    .then(() => new Promise((resolve, reject) => {
      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;

      disclosureContentApp.requestFocus().then(resolve).catch(reject);
    }))
    .then(() => {
      wrapper.update();

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.key).toEqual('DISCLOSE_KEY');
      expect(wrapper.state().disclosureComponentData.DISCLOSE_KEY.component.props.id).toEqual('disclosure-component');

      const disclosureContentApp = wrapper.find('#disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).toBe(undefined);
      expect(disclosureContentApp.maximize).not.toBe(undefined);
      expect(disclosureContentApp.minimize).toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
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

      expect(wrapper.state().disclosureIsOpen).toBe(false);
      expect(wrapper.state().disclosureIsFocused).toBe(false);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('small');
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

      expect(wrapper.state().disclosureIsOpen).toBe(false);
      expect(wrapper.state().disclosureIsFocused).toBe(false);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('small');
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

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY', 'NESTED']);
      expect(wrapper.state().disclosureComponentData.NESTED.key).toEqual('NESTED');
      expect(wrapper.state().disclosureComponentData.NESTED.component.props.id).toEqual('nested-disclosure-component');

      const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[0].props.app;
      expect(disclosureContentApp).not.toBe(undefined);
      expect(disclosureContentApp.disclose).not.toBe(undefined);
      expect(disclosureContentApp.dismiss).not.toBe(undefined);
      expect(disclosureContentApp.closeDisclosure).not.toBe(undefined);
      expect(disclosureContentApp.goBack).not.toBe(undefined);
      expect(disclosureContentApp.maximize).not.toBe(undefined);
      expect(disclosureContentApp.minimize).toBe(undefined);
      expect(disclosureContentApp.requestFocus).not.toBe(undefined);
      expect(disclosureContentApp.releaseFocus).not.toBe(undefined);
      expect(disclosureContentApp.registerDismissCheck).toBe(undefined); // TODO: Flip this with AppDelegate release
    })
    .then(() => new Promise((resolve, reject) => {
      const disclosureContentApp = wrapper.find('#nested-disclosure-component').getElements()[0].props.app;

      disclosureContentApp.goBack().then(resolve).catch(reject);
    }))
    .then(() => {
      wrapper.update();

      expect(wrapper.state().disclosureIsOpen).toBe(true);
      expect(wrapper.state().disclosureIsFocused).toBe(true);
      expect(wrapper.state().disclosureIsMaximized).toBe(false);
      expect(wrapper.state().disclosureSize).toBe('large');
      expect(wrapper.state().disclosureComponentKeys).toEqual(['DISCLOSE_KEY']);
      expect(wrapper.state().disclosureComponentData.NESTED).toBe(undefined);
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
      expect(firstRenderPayload.disclosure.size).toEqual('small');
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
