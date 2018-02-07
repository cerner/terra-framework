// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import 'terra-base/lib/baseStyles';

// import Menu from 'terra-menu';

// const propTypes = {
//   /**
//    * Config File used to generate the menu
//    */
//   config: PropTypes.node.isRequired,
// };

// class GenerateMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.generate = this.generate.bind(this);
//   }

//   componentDidMount(){
//     this.generateMenuPage(this.props.config);
//   }

//     /**
//    * Recursively traverses a config file and genereates menu pages and it's associated menu items.
//    * @param {*} config
//    */
//   generateMenuPage(config) {
//     const itemArray = [];
//     if ('children' in config) {
//       config.children.forEach((object) => {
//         const menuItem = (
//           <Menu.Item
//             key={object.key}
//             content={object.content || object.title}
//           />
//         )
//         itemArray.push(menuItem);
//         this.generateMenuPage(object);
//       });
//     } else {
//       return;
//     }
//     // console.log('menu page');
//     const menuPage = (
//       <MenuPage
//         title={config.title}
//         key={config.key}
//         onRequestBack={this.pop}
//         onRequestClose={this.push}
//         index={}
//       >
//         {itemArray}
//       </MenuPage>);
//   }
// }

// GenerateMenu.propTypes = propTypes;

// export default GenerateMenu
