import React from 'react';
import EmbeddedComponent from '../../src/EmbeddedComponent';

describe('EmbeddedComponent', () => {
  const basePath = './dist';
  const modulePath = 'index.js';
  const aModule = { default: 'a module' };
  const defaultRender = <EmbeddedComponent basePath={basePath} />;
  const withPlaceholder = <EmbeddedComponent basePath={basePath} placeholder={<div>placeholder</div>} />;
  const withTimeout = <EmbeddedComponent basePath={basePath} timeout={1000} />;
  const aManifest = { 'index.js': modulePath, 'index.css': 'index.css' };
  const withManifest = <EmbeddedComponent basePath={basePath} manifest={aManifest} />;

  beforeEach(() => {
    jest.useFakeTimers();
    // Mock amdRequire
    global.SystemJS.amdRequire = jest.fn().mockImplementation((urlArray, callback) => {
      callback(aModule);
    });
  });

  // Prop Tests
  it('should use blank message when no placeholder is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should use the placeholder message when placeholder is given', () => {
    const wrapper = shallow(withPlaceholder);
    expect(wrapper).toMatchSnapshot();
  });

  it('should give an error if component times out', () => {
    function runTheTimers() {
      shallow(withTimeout);
      jest.runAllTimers();
    }
    expect(runTheTimers).toThrow('Timed out while mounting Component');
  });

  it('should load the manifest and send to loadCSS when given', async () => {
    const wrapper = shallow(withManifest);
    // This mocks loadCSS function
    wrapper.instance().loadCSS = jest.fn((manifest) => {
      expect(manifest).toEqual(aManifest);
    });
    await wrapper.instance().componentDidMount();
  });

  it('should load the manifest through fetch when not given', async () => {
    const wrapper = shallow(defaultRender);
    // This mocks loadCSS function
    wrapper.instance().loadCSS = jest.fn((manifest) => {
      expect(manifest).toEqual(aManifest);
    });
    await wrapper.instance().componentDidMount();
  });

  it('should run loadModule with correct url', async () => {
    const wrapper = shallow(withManifest);
    // This mocks the loadModule function
    wrapper.instance().loadModule = jest.fn((url) => {
      expect(url).toEqual(`${basePath}/${modulePath}`);
    });
    await wrapper.instance().componentDidMount();
  });

  it('should load the module into state', async () => {
    const wrapper = shallow(withManifest);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.module).toEqual(aModule.default);
  });
});
