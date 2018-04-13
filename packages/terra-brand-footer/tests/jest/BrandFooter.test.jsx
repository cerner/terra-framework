import React from 'react';
import BrandFooter from '../../src/BrandFooter';

describe('BrandFooter', () => {
  const defaultRender = <BrandFooter />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<BrandFooter />);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render with provided links', () => {
    const wrapper = shallow(<BrandFooter
      links={[
        { text: 'Cerner Home', href: 'https://www.cerner.com/' },
        { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided content bottom', () => {
    const wrapper = shallow(
      <BrandFooter
        contentBottom={
          <p style={{ marignTop: '.7142857142857143rem' }} >
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class brand-footer', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('brand-footer');
  });
});
