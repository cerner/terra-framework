import React from 'react';
import { IntlProvider } from 'terra-base';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeaderLayout', () => {
  it('should render without optional props', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          extensions={<div id="test-extensions">Extensions</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions and navigation', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          extensions={<div id="test-extensions">Extensions</div>}
          navigation={<div id="test-navigation">Navigation</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, and logo', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          extensions={<div id="test-extensions">Extensions</div>}
          navigation={<div id="test-navigation">Navigation</div>}
          logo={<div id="test-logo">Logo</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, and toggle', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          extensions={<div id="test-extensions">Extensions</div>}
          navigation={<div id="test-navigation">Navigation</div>}
          logo={<div id="test-logo">Logo</div>}
          toggle={<div id="test-toggle">Toggle</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, toggle, and utilities', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          extensions={<div id="test-extensions">Extensions</div>}
          navigation={<div id="test-navigation">Navigation</div>}
          logo={<div id="test-logo">Logo</div>}
          toggle={<div id="test-toggle">Toggle</div>}
          utilities={<div id="test-utilities">Utilities</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation, logo, toggle, and utilities', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          navigation={<div id="test-navigation">Navigation</div>}
          logo={<div id="test-logo">Logo</div>}
          toggle={<div id="test-toggle">Toggle</div>}
          utilities={<div id="test-utilities">Utilities</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo, toggle, and utilities', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          logo={<div id="test-logo">Logo</div>}
          toggle={<div id="test-toggle">Toggle</div>}
          utilities={<div id="test-utilities">Utilities</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle and utilities', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          toggle={<div id="test-toggle">Toggle</div>}
          utilities={<div id="test-utilities">Utilities</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided utilities', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          utilities={<div id="test-utilities">Utilities</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          navigation={<div id="test-navigation">Navigation</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          logo={<div id="test-logo">Logo</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle', () => {
    const result = shallow(
      <IntlProvider locale="en">
        <ApplicationHeaderLayout
          toggle={<div id="test-toggle">Toggle</div>}
        />
      </IntlProvider>,
    );

    expect(result).toMatchSnapshot();
  });
});
