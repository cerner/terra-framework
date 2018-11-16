import React from 'react';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Button from 'terra-button';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconFeaturedOutline from 'terra-icon/lib/icon/IconFeaturedOutline';

import ExtensionsDisclosure from './ExtensionsDisclosure';
import { Utils } from '../../../ApplicationLayout';

const propTypes = {
  disclosureManager: disclosureManagerShape,
  layoutConfig: Utils.propTypes.layoutConfigPropType, // eslint-disable-line react/forbid-foreign-prop-types
};

class ApplicationExtensions extends React.Component {
  constructor(props) {
    super(props);

    this.discloseExtensionContent = this.discloseExtensionContent.bind(this);
  }

  discloseExtensionContent(extensionName) {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'tiny',
      content: {
        key: `${extensionName}-disclosure`,
        component: <ExtensionsDisclosure name={extensionName} />,
      },
    });
  }

  render() {
    const { layoutConfig } = this.props;
    const isCompactSize = Utils.helpers.isSizeCompact(layoutConfig.size);

    let containerProps;
    let variant;
    if (isCompactSize) {
      containerProps = {
        style: { padding: '10px', width: '100%', backgroundColor: 'lightgrey' },
      };

      variant = Button.Opts.Variants.ACTION;
    }

    return (
      <div {...containerProps}>
        <Button icon={<IconSettings />} text="Settings" variant={variant} isIconOnly style={{ marginRight: '5px' }} onClick={() => this.discloseExtensionContent('Settings')} />
        <Button icon={<IconCalendar />} text="Calendar" variant={variant} isIconOnly style={{ marginRight: '5px' }} onClick={() => this.discloseExtensionContent('Calendar')} />
        <Button icon={<IconFeaturedOutline />} text="Favorites" variant={variant} isIconOnly style={{ marginRight: '5px' }} onClick={() => this.discloseExtensionContent('Favorites')} />
      </div>
    );
  }
}

ApplicationExtensions.propTypes = propTypes;

export default withDisclosureManager(ApplicationExtensions);
