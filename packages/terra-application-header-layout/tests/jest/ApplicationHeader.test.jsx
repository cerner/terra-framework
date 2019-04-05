import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeaderLayout', () => {
  it('should render without optional props', () => {
    const result = shallowWithIntl(<ApplicationHeaderLayout />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions and navigation', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, and logo', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, navigation, logo, and toggle', () => {
    const result = shallowWithIntl(
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
    const result = shallowWithIntl(
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
    const result = shallowWithIntl(
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
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle and utilities', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided utilities', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        utilities={<div id="test-utilities">Utilities</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided navigation', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        navigation={<div id="test-navigation">Navigation</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided logo', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        logo={<div id="test-logo">Logo</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should render with provided toggle', () => {
    const result = shallowWithIntl(
      <ApplicationHeaderLayout
        toggle={<div id="test-toggle">Toggle</div>}
      />,
    );

    expect(result).toMatchSnapshot();
  });
});
