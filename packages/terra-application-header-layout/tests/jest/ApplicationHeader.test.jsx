import React from 'react';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeaderLayout', () => {
  it('should render without optional props', () => {
    const result = enzymeIntl.shallowWithIntl(<ApplicationHeaderLayout />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions and navigation', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, and logo', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, and toggle', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, toggle, and utilities', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation, logo, toggle, and utilities', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo, toggle, and utilities', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle and utilities', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided utilities', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        navigation={<div id="test-navigation">Navigation</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        logo={<div id="test-logo">Logo</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle', () => {
    const result = enzymeIntl.shallowWithIntl(
      <ApplicationHeaderLayout
        toggle={<div id="test-toggle">Toggle</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'clinical-lowlight-theme',
      });
    const wrapper = enzymeIntl.mountWithIntl(<ApplicationHeaderLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
