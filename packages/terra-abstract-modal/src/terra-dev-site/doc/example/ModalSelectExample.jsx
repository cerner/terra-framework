import React, { useContext } from 'react';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import AllowClearExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/AllowClear?dev-site-example';
import ControlledExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Controlled?dev-site-example';
import ComboboxExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Combobox?dev-site-example';
import DefaultExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Default?dev-site-example';
import DisabledExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Disabled?dev-site-example';
import IsTouchAccessibleExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/IsTouchAccessible?dev-site-example';
import InvalidExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Invalid?dev-site-example';
import IncompleteExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Incomplete?dev-site-example';
import MaxHeightExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/MaxHeight?dev-site-example';
import MultipleExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Multiple?dev-site-example';
import OptGroupExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/OptGroup?dev-site-example';
import SearchExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Search?dev-site-example';
import TagExample from 'terra-form-select/lib/terra-dev-site/doc/example/legacy/Tag?dev-site-example';

const ModalExample = () => {
  const disclosureManager = useContext(DisclosureManagerContext);

  return (
    <button
      type="button"
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          size: 'large',
          content: {
            key: 'Example',
            component: (
              <div>
                <DisclosureManagerHeaderAdapter title="Example" />
                Examples
                <DefaultExample title="Default - Marked For Deprecation" description="The default variant should no longer be used. It remains for passivity until the next major version bump. Please refer to the Native Select component." />
                <SearchExample description="A search variant provides a searchable single select." />
                <ComboboxExample description="A combobox variant allows a user to enter a single free text entry or select a single option from the the dropdown." />
                <MultipleExample description="A multiple variant allows searching and selecting multiple options." />
                <TagExample description="A tag variant allows a user to enter multiple custom free text entries or select multiple options from the the dropdown." />
                <DisabledExample title="Disabled (applies to all)" />
                <IsTouchAccessibleExample title="Is Touch Accessible (applies to only 'combobox', 'multiple', 'tag', and 'search')" description="Ensure accessibility on touch devices. Will render the dropdown menu in normal DOM flow with position absolute. By default, the menu renders in a portal, which is inaccessible on touch devices." />
                <InvalidExample title="Invalid (applies to all)" description="Applies theme-specific styling for invalid. Will also display error text when used with a Field." />
                <IncompleteExample title="Incomplete (applies to all)" description="Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***" />
                <OptGroupExample title="Ability to add Option Groups (applies to all)" description="An OptGroup provides a way to group options together within the listbox. Can be applied to all select variants (default, search, combobox, multiple, tag)." />
                <MaxHeightExample titel="Ability to set a Maximum Height (applies to all)" description="An example of implementing a custom max height of the dropdown." />
                <AllowClearExample title="Ability to Clear Selection (applies to only 'default', 'combobox', and 'search')" description="An example with an option to clear the selected item. (Not applicable to 'multiple' or 'tag' variants)" />
                <ControlledExample title="Create a Controlled Select (applies to all)" description="An example of implementing a controlled Select." />
              </div>
            ),
          },
        });
      }}
    >
      Open Modal
    </button>
  );
};

export default ModalExample;
