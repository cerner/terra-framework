import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import MenuSrc from '!raw-loader!../../../../src/Menu';
import MenuItemSrc from '!raw-loader!../../../../src/MenuItem';
import MenuItemGroupSrc from '!raw-loader!../../../../src/MenuItemGroup';

// Example Files
import BasicMenu from '../example/BasicMenu';
import BasicMenuSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BasicMenu';
import MenuBounded from '../example/MenuBounded';
import MenuBoundedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MenuBounded';
import MenuWidths from '../example/MenuWidths';
import MenuWidthsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MenuWidths';
import MenuWithInstructionsForUse from '../example/MenuWithInstructionsForUse';
import MenuWithInstructionsForUseSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MenuWithInstructionsForUse';

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Menu',
        example: <BasicMenu />,
        source: BasicMenuSrc,
      },
      {
        title: 'Menu With Arrow',
        example: <BasicMenu isArrowDisplayed />,
        source: BasicMenuSrc,
      },
      {
        title: 'Menu Bounded',
        example: <MenuBounded />,
        source: MenuBoundedSrc,
      },
      {
        title: 'Menu Widths',
        example: <MenuWidths />,
        source: MenuWidthsSrc,
      },
      {
        title: 'Help Menu Item: Electronic Instructions For Use',
        description: 'The Electronic Instructions For Use (eIFU) icon is a regulatory requirement for CE Mark Certification and Compliance, and is used to indicate Help content that is the equivalent of a manufacturer\'s instruction manual. The label for the Help menu option should be the name of the application followed by "Help."',
        example: <MenuWithInstructionsForUse />,
        source: MenuWithInstructionsForUseSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Menu',
        componentSrc: MenuSrc,
      },
      {
        componentName: 'Menu.Item',
        componentSrc: MenuItemSrc,
      },
      {
        componentName: 'Menu.ItemGroup',
        componentSrc: MenuItemGroupSrc,
      },
    ]}
  />
);

export default DocPage;
