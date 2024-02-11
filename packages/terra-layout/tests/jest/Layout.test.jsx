import React from 'react';

import Layout from '../../src/Layout';
import { getBreakpointSize, getCustomProps } from '../../src/LayoutUtils';

jest.mock('../../src/LayoutUtils');

describe('Layout', () => {
  it('should render a Layout without optional props', () => {
    getBreakpointSize.mockImplementation(() => 'tiny');

    const result = enzyme.shallow((
      <Layout />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a Layout with custom props', () => {
    getBreakpointSize.mockImplementation(() => 'tiny');
    getCustomProps.mockReturnValueOnce({ 'data-test-attr': 'test-val' });

    const result = enzyme.shallow((
      <Layout />
    ));
    expect(result).toMatchSnapshot();
  });

  describe('Menu Disabled', () => {
    const layout = (
      <Layout
        header={<div>Test Header</div>}
      >
        <div>Test Content</div>
      </Layout>
    );

    it('should render a Layout when tiny', () => {
      getBreakpointSize.mockImplementation(() => 'tiny');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when small', () => {
      getBreakpointSize.mockImplementation(() => 'small');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when medium', () => {
      getBreakpointSize.mockImplementation(() => 'medium');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when large', () => {
      getBreakpointSize.mockImplementation(() => 'large');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when huge', () => {
      getBreakpointSize.mockImplementation(() => 'huge');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });
  });

  describe('Menu Enabled', () => {
    const layout = (
      <Layout
        header={<div>Test Header</div>}
        menu={<div>Test Menu</div>}
        menuText="Menu Text"
      >
        <div>Test Content</div>
      </Layout>
    );

    it('should render a Layout when tiny', () => {
      getBreakpointSize.mockImplementation(() => 'tiny');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when small', () => {
      getBreakpointSize.mockImplementation(() => 'small');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when medium', () => {
      getBreakpointSize.mockImplementation(() => 'medium');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when large', () => {
      getBreakpointSize.mockImplementation(() => 'large');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });

    it('should render a Layout when huge', () => {
      getBreakpointSize.mockImplementation(() => 'huge');

      const result = enzyme.shallow(layout);
      expect(result).toMatchSnapshot();
    });
  });
});
