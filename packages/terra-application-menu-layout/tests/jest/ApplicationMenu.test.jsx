import React from 'react';

import ApplicationMenuLayout from '../../src/ApplicationMenuLayout';

describe('ApplicationMenuLayout', () => {
  it('should render without optional props', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout />);
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      header={<div id="test-header">Header</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided header and extensions', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      header={<div id="test-header">Header</div>}
      extensions={<div id="test-extensions">Extensions</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided header, extensions, and content', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      header={<div id="test-header">Header</div>}
      extensions={<div id="test-extensions">Extensions</div>}
      content={<div id="test-content">Content</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided header, extensions, content, and footer', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      header={<div id="test-header">Header</div>}
      extensions={<div id="test-extensions">Extensions</div>}
      content={<div id="test-content">Content</div>}
      footer={<div id="test-footer">Footer</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions, content, and footer', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      extensions={<div id="test-extensions">Extensions</div>}
      content={<div id="test-content">Content</div>}
      footer={<div id="test-footer">Footer</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided content and footer', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      content={<div id="test-content">Content</div>}
      footer={<div id="test-footer">Footer</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided footer', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      footer={<div id="test-footer">Footer</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided content', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      content={<div id="test-content">Content</div>}
    />);

    expect(result).toMatchSnapshot();
  });

  it('should render with provided extensions', () => {
    const result = enzyme.shallow(<ApplicationMenuLayout
      extensions={<div id="test-extensions">Extensions</div>}
    />);

    expect(result).toMatchSnapshot();
  });
});
