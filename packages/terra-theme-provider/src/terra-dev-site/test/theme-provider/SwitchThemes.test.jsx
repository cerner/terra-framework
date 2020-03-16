import React from 'react';
import ThemeProvider from '../../../ThemeProvider';
import MockThemeComponent from '../common/MockThemeComponent';

class SwitchThemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeName: '',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="theme">Theme Switcher</label>
          <select id="theme" name="themeName" value={this.state.themeName} onChange={this.handleSelectChange}>
            <option value="">Default Theme</option>
            <option value="cerner-mock-theme">Mock Theme</option>
          </select>
        </form>
        <ThemeProvider id="themeProvider" themeName={this.state.themeName}>
          <MockThemeComponent id="themedComponent">
            Theme Provider Test
          </MockThemeComponent>
        </ThemeProvider>
      </div>
    );
  }
}

export default SwitchThemes;
