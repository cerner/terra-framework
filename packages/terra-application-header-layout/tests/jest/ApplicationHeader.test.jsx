import React from 'react';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeaderLayout', () => {
  it('should render without optional props', () => {
    const result = shallow(<ApplicationHeaderLayout />);
    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions', () => {
    const result = shallow(<ApplicationHeaderLayout
      extensions={<div id="test-extensions">Extensions</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions and navigation', () => {
    const result = shallow(<ApplicationHeaderLayout
      extensions={<div id="test-extensions">Extensions</div>}
      navigation={<div id="test-navigation">Navigation</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, and logo', () => {
    const result = shallow(<ApplicationHeaderLayout
      extensions={<div id="test-extensions">Extensions</div>}
      navigation={<div id="test-navigation">Navigation</div>}
      logo={<div id="test-logo">Logo</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, and toggle', () => {
    const result = shallow(<ApplicationHeaderLayout
      extensions={<div id="test-extensions">Extensions</div>}
      navigation={<div id="test-navigation">Navigation</div>}
      logo={<div id="test-logo">Logo</div>}
      toggle={<div id="test-toggle">Toggle</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, toggle, and utilities', () => {
    const result = shallow(<ApplicationHeaderLayout
      extensions={<div id="test-extensions">Extensions</div>}
      navigation={<div id="test-navigation">Navigation</div>}
      logo={<div id="test-logo">Logo</div>}
      toggle={<div id="test-toggle">Toggle</div>}
      utilities={<div id="test-utilities">Utilities</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation, logo, toggle, and utilities', () => {
    const result = shallow(<ApplicationHeaderLayout
      navigation={<div id="test-navigation">Navigation</div>}
      logo={<div id="test-logo">Logo</div>}
      toggle={<div id="test-toggle">Toggle</div>}
      utilities={<div id="test-utilities">Utilities</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo, toggle, and utilities', () => {
    const result = shallow(<ApplicationHeaderLayout
      logo={<div id="test-logo">Logo</div>}
      toggle={<div id="test-toggle">Toggle</div>}
      utilities={<div id="test-utilities">Utilities</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle and utilities', () => {
    const result = shallow(<ApplicationHeaderLayout
      toggle={<div id="test-toggle">Toggle</div>}
      utilities={<div id="test-utilities">Utilities</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided utilities', () => {
    const result = shallow(<ApplicationHeaderLayout
      utilities={<div id="test-utilities">Utilities</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation', () => {
    const result = shallow(<ApplicationHeaderLayout
      navigation={<div id="test-navigation">Navigation</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo', () => {
    const result = shallow(<ApplicationHeaderLayout
      logo={<div id="test-logo">Logo</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle', () => {
    const result = shallow(<ApplicationHeaderLayout
      toggle={<div id="test-toggle">Toggle</div>}
    />);

    expect(result).toMatchSnapshot();
  });
});
