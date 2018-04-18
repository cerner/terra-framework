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

  it('should render with provided content right', () => {
    const wrapper = shallow(
      <BrandFooter
        contentRight={
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided content bottom', () => {
    const wrapper = shallow(
      <BrandFooter
        contentBottom={
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content right', () => {
    const wrapper = shallow(
      <BrandFooter
        links={[
          { text: 'Cerner Home', href: 'https://www.cerner.com/' },
          { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
        ]}
        contentRight={
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content bottom', () => {
    const wrapper = shallow(
      <BrandFooter
        links={[
          { text: 'Cerner Home', href: 'https://www.cerner.com/' },
          { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
        ]}
        contentBottom={
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links, content bottom and content right', () => {
    const wrapper = shallow(
      <BrandFooter
        links={[
          { text: 'Cerner Home', href: 'https://www.cerner.com/' },
          { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
        ]}
        contentBottom={
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
        }
        contentRight={
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
        }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content bottom and content right', () => {
    const wrapper = shallow(
      <BrandFooter
        contentBottom={
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
        }
        contentRight={
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
        }
      />);
  });

  // Structure Tests
  it('should have the class brand-footer', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('brand-footer');
  });
});
