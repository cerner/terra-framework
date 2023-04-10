import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import { Route } from 'react-router-dom';
import Button from 'terra-button';
import classNames from 'classnames/bind';

import ContentContainer from 'terra-content-container';
import styles from './ApplicationContent.module.scss';

const cx = classNames.bind(styles);

const DisclosureComponent = withDisclosureManager(({ disclosureManager }) => (
  <ContentContainer
    fill
  >
    <p>Hello World</p>
    <Button text="Close Modal" onClick={disclosureManager.closeDisclosure} />
  </ContentContainer>
));

const dummyContent = (
  <div>
    <h2>Single column layout</h2>
    <hr />
    <p>Single column layouts present the main content in a single, vertical column. This type of layout is perhaps the simplest from this list and is the easiest for users to navigate. Visitors simply scroll down to see more content.</p>
    <p>Despite its simplicity, single column layouts are quite popular among many websites. The mobile revolution also had its impact on the popularity of this type of layout — single column layouts fit mobile screens perfectly.</p>
    <h2>When to use it</h2>
    <hr />
   <p>This layout finds application in many personal blogs based on minimalistic design principles. This is a common layout for microblogs such as Tumblr.</p>
    <h2>Split screen layout</h2>
    <hr />
    <p>A split screen (or one screen divided in two) web layout is perfect for a page that has two main pieces of content of equal importance. It allows designers to display both items simultaneously while giving them equal consideration.</p>
    <h2>When to use it</h2>
    <hr />
    <p>Split screen layouts are perfect when your site offers two drastically different variations of the user journey, such as two different types of instructions as we see in the Dropbox example below.</p>
    <h2>Asymmetrical layout</h2>
    <hr />
    <p>Asymmetry is the lack of equality between two sides of the layout. Asymmetry is a long-time favorite technique in the art world and has recently become popular among designers when creating website layouts.</p>
    <p>Many people confuse asymmetry with imbalance but, in fact, the goal of asymmetry is to create a balance when it’s either impossible or not desirable to use equal weight for two sections. Using asymmetry makes it possible to create tension and dynamism, and asymmetry facilitates better scanning behavior by focusing a user’s attention on individual objects (focal points).</p>
    <h2>When to use it</h2>
    <hr />
    <p>This type of web layout can be used when designers want to create interesting and unexpected layouts, while still providing directional emphasis. Appropriately applied, asymmetry can create active space that guides the eye from one element to another, even across emptiness. Consider how Dropbox clearly shows points of focus in the example below.</p>
  </div>
);

class ApplicationContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuSelection = this.handleMenuSelection.bind(this);

    this.state = {
      eventState: undefined,
    };
  }

  componentDidMount() {
    document.addEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
  }

  componentWillUnmount() {
    document.removeEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
  }

  handleMenuSelection(event) {
    this.setState({
      eventState: event.detail,
    });
  }

  render() {
    const {
      layoutConfig, disclosureManager, basePath, contentName, noMenu, showDummyContent,
    } = this.props;

    let bodyContent;
    if (showDummyContent) {
      bodyContent = (
        <div>
          <h2>Another Page?</h2>
          <hr />
          <p>These pages are here to demonstrate the responsive functionality of header navigation tabs. The tabs will collapse into a More tab as space is constrained.</p>
          {dummyContent}
        </div>
      );
    } else {
      let dynamicContent;
      if (noMenu) {
        dynamicContent = (
          <div>
            <h2>No Menu? No Problem!</h2>
            <hr />
            <p>Components for the menu region are optional. The ApplicationLayout will still render a default menu at tiny and small breakpoints to ensure utilities/navigation items are accessible.</p>
          </div>
        );
      } else {
        dynamicContent = (
          <div>
            <h2>Nested Routing</h2>
            <hr />
            <p>The content and menu components will remain mounted as long as their associated path continues to match the current router location. Therefore, we can change what the content components render based on the presence of additional path segments.</p>
            <p>For example, the displayed menu component will update the router location when its items are clicked. This content component will be notified of the location change and render the update below.</p>

            <p>
              Menu item selected:
              <Route
                path={`${basePath}/*`}
                render={({ location }) => (
                  <b>{location.pathname}</b>
                )}
              />
            </p>
            <h2>Menu/Content Communication</h2>
            <hr />
            <p>Additionally, communication can occur through custom events or shared context.</p>
            <p>
              Event detected:
              <b>{this.state.eventState}</b>
            </p>
          </div>
        );
      }

      bodyContent = (
        <div>
          {dynamicContent}
          <h2>Layout Control</h2>
          <hr />
          <p>
            Content and menu components will receive a prop named
            <b>layoutConfig</b>
            {' '}
            which contains APIs for manipulating the layout state. When the layout is tiny or small, the layoutConfig will include a function called `toggleMenu` which will present or dismiss the menu.
          </p>
          <Button text="Toggle Menu" isDisabled={!layoutConfig.toggleMenu} onClick={() => { layoutConfig.toggleMenu(); }} />
          <h2>Progressive Disclosure</h2>
          <hr />
          <p>
            The ApplicationLayout includes ModalManager support by default. The ApplicationLayout can be wrapped in additional DisclosureManagers to provide additional disclosure capabilities.
          </p>
          <Button
            text="Launch Modal"
            onClick={() => {
              disclosureManager.disclose({
                preferredType: 'modal',
                size: 'medium',
                content: {
                  key: 'MODAL_TEST',
                  component: <DisclosureComponent />,
                },
              });
            }}
          />
        </div>
      );
    }

    return (
      <ContentContainer
        fill
      >
        <div className={cx('content-wrapper')}>
          <h1>{contentName}</h1>
          {bodyContent}
        </div>
      </ContentContainer>
    );
  }
}

ApplicationContent.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
  disclosureManager: disclosureManagerShape,
  basePath: PropTypes.string,
  contentName: PropTypes.string,
  noMenu: PropTypes.bool,
  showDummyContent: PropTypes.bool,
};

export default withDisclosureManager(ApplicationContent);
