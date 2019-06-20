import React from 'react';
import CollapsibleMenuView from '../../../CollapsibleMenuView';

const locales = ['en', 'en-AU', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fi-FI', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];
const CollapsibleMenuViewSingleItem = () => {
  const items = [];
  items.push(
    <CollapsibleMenuView.ItemGroup
      key="locale"
    >
      {locales.map(locale => (
        <CollapsibleMenuView.Item
          text={locale}
          key={locale}
        />
      ))}
    </CollapsibleMenuView.ItemGroup>,
  );
  return (
    <CollapsibleMenuView key="menu">
      {items}
    </CollapsibleMenuView>
  );
};

export default CollapsibleMenuViewSingleItem;
