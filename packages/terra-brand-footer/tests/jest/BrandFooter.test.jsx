import React from 'react';
import BrandFooter from '../../src/BrandFooter';

describe('BrandFooter', () => {
  const defaultRender = <BrandFooter />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzyme.shallow(<BrandFooter />);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render with provided links', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a section header', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          headerText: 'Cerner Links',
        },
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a section header and provided links', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          headerText: 'Cerner Links',
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with multiple link groups', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          headerText: 'Cerner Links',
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
        {
          headerText: 'Cerner Links Again',
          links: [
            { text: 'Cerner Home Also', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code As Well', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided content left', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentLeft={
        <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided content right', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided content bottom', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content left', () => {
    const component = (
      <BrandFooter
        sections={[
          {
            links: [
              { text: 'Cerner Home', href: 'https://www.cerner.com/' },
              { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
            ],
          },
        ]}
        contentLeft={
          <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
      />
    );
    const wrapper = enzyme.shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content right', () => {
    const component = (
      <BrandFooter
        sections={[
          {
            links: [
              { text: 'Cerner Home', href: 'https://www.cerner.com/' },
              { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
            ],
          },
        ]}
        contentRight={(
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
)}
      />
    );
    const wrapper = enzyme.shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content bottom', () => {
    const component = (
      <BrandFooter
        sections={[
          {
            links: [
              { text: 'Cerner Home', href: 'https://www.cerner.com/' },
              { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
            ],
          },
        ]}
        contentBottom={(
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
)}
      />
    );
    const wrapper = enzyme.shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links, content left, content bottom and content right', () => {
    const component = (
      <BrandFooter
        sections={[
          {
            links: [
              { text: 'Cerner Home', href: 'https://www.cerner.com/' },
              { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
            ],
          },
        ]}
        contentLeft={
          <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
      }
        contentBottom={(
          <p>
            <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
          </p>
)}
        contentRight={(
          <div>
            <p><small>Powered by</small></p>
            <p><b>React.js</b></p>
          </div>
)}
      />
    );
    const wrapper = enzyme.shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content left', () => {
    const component = (
      <BrandFooter
        sections={[
          {
            links: [
              { text: 'Cerner Home', href: 'https://www.cerner.com/' },
              { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
            ],
          },
        ]}
        contentLeft={
          <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
      }
      />
    );
    const wrapper = enzyme.shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content right', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links and content bottom', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided links, content left, content bottom and content right', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      sections={[
        {
          links: [
            { text: 'Cerner Home', href: 'https://www.cerner.com/' },
            { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
          ],
        },
      ]}
      contentLeft={
        <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content bottom and content left', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
      contentLeft={
        <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content bottom and content right', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content bottom, content right and content left', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentLeft={
        <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
      contentBottom={(
        <p>
          <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
        </p>
)}
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content right and content left', () => {
    const wrapper = enzyme.shallow(<BrandFooter
      contentLeft={
        <img src="https://github.com/cerner/terra-core/raw/main/terra.png" alt="terra-ui" height="40px" width="40px" />
        }
      contentRight={(
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
)}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class brand-footer', () => {
    const wrapper = enzyme.shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('brand-footer');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = enzyme.shallow(<BrandFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
