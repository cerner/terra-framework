import React from 'react';
import classNames from 'classnames/bind';
import styles from './ResponsiveTabsVariantWrapper.module.scss';

const cx = classNames.bind(styles);

function ResponsiveTabsVariantsWrapper(WrappedComponent) {
  return class ResponsiveTabsVariant extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = {
        responsiveTabsVariant: 'parent',
        containerClassName: 'parent-container-650',
        renderIconTabs: false,
      };
    }

    handleOnSelect(event) {
      this.setState({
        renderIconTabs: (event.target.value.split('-')[0] !== 'default'),
        responsiveTabsVariant: event.target.value.split('-')[1],
        containerClassName: event.target.value,
      });
    }

    render() {
      return (
        <div className={cx(this.state.containerClassName)}>
          <WrappedComponent
            renderIconTabs={this.state.renderIconTabs}
            responsiveTo={this.state.responsiveTabsVariant}
            {...this.props}
          />
          <div className={cx('options-container')}>
            <p><label htmlFor="responsiveTabsVariant">Select a responsiveTo variant:</label></p>
            <select className={cx('options')} id="responsiveTabsVariant" name="responsiveTabsVariant" value={this.state.containerClassName} onChange={this.handleOnSelect}>
              <option value="default-window">Default Tabs - Window</option>
              <option value="default-parent-container-220">Default Tabs - Parent (Container Width: 220px)</option>
              <option value="default-parent-container-650">Default Tabs - Parent (Container Width: 650px)</option>
              <option value="icon-window">Icon Only Tabs - Window</option>
              <option value="icon-none-container-220">Icon Only Tabs - None (Container Width: 220px)</option>
              <option value="icon-none-container-650">Icon Only Tabs - None (Container Width: 650px)</option>
              <option value="icon-parent-container-220">Icon Only Tabs - Parent (Container Width: 220px)</option>
            </select>
          </div>
        </div>
      );
    }
  };
}

export default ResponsiveTabsVariantsWrapper;
