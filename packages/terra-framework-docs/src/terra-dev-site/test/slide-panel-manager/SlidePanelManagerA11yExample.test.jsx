import React, { useContext } from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';
import ContentContainer from 'terra-content-container/lib/ContentContainer';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';
import List, { Item } from 'terra-list/lib/index';
import SlidePanelManager from 'terra-slide-panel-manager';
import PropTypes from 'prop-types';

const allergyList = [
  {
    name: 'Milk',
    notes: 'Patient is allergic to milk products.',
  },
  {
    name: 'Peanuts',
    notes: 'Patient is allergic to peanut products.',
  },
  {
    name: 'Pollen',
    notes: 'Patient is allergic to pollen.',
  },
];

const mainHeader = (
  <ActionHeader text="Patient Allergies" />
);

function DisclosureComponent({ disclosureType, name, notes }) {
  const disclosureManager = useContext(DisclosureManagerContext);
  return (
    <ContentContainer fill>
      <DisclosureManagerHeaderAdapter title={`${name} Overview`} />
      <div>
        <h3>{name}</h3>
        <p>
          Focus should be on the entire slide panel and assistive technologies should
          provide context that the user is in a new region.
        </p>
        <p>
          Dismissing from the slide panel should focus on the last active
          element and should provide context that the user is in a new region.
        </p>
        <p>{notes}</p>
        <button
          type="button"
          onClick={() => {
            disclosureManager.dismiss().catch(() => {
              console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
            });
          }}
        >
          Dismiss
        </button>
        <button
          type="button"
          onClick={() => {
            disclosureManager.disclose({
              preferredType: 'panel',
              size: 'small',
              content: {
                key: `${name} Symptoms`,
                component: (
                  <NestedDisclosureComponent
                    name={`${name} Symptoms`}
                    disclosureType={disclosureType}
                  />
                ),
              },
            });
          }}
        >
          View Symptoms
        </button>
      </div>
    </ContentContainer>
  );
}

DisclosureComponent.propTypes = {
  disclosureType: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.string,
};

function NestedDisclosureComponent({ name }) {
  const disclosureManager = useContext(DisclosureManagerContext);
  return (
    <ContentContainer fill>
      <DisclosureManagerHeaderAdapter title={name} />
      <div>
        <h3>{name}</h3>
        <p>
          Focus should be on the entire slide panel and assistive technologies should
          provide context that the user is in a new region.
        </p>
        <p>
          Dismissing from a nested slide panel should focus on the last active
          element on the previous slide and should provide context that the user
          is in a new region.
        </p>
        <ul>
          <li>Symptom A</li>
          <li>Symptom B</li>
          <li>Symptom C</li>
        </ul>
        <button
          type="button"
          onClick={() => {
            disclosureManager.dismiss().catch(() => {
              console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
            });
          }}
        >
          Dismiss
        </button>
      </div>
    </ContentContainer>
  );
}

NestedDisclosureComponent.propTypes = {
  name: PropTypes.string,
};

const ContentComponent = () => {
  const disclosureManager = useContext(DisclosureManagerContext);
  return (
    <ContentContainer fill header={mainHeader}>
      <p id="list-title">Select an allergy from the list to view patient allergy details:</p>
      <List
        ariaDescription="Select an allergy from the list to view patient allergy details"
        role="listbox"
      >
        {allergyList.map((allergy) => (
          <Item
            key={allergy.name}
            isSelectable
            hasChevron
            onSelect={() => {
              disclosureManager.disclose({
                preferredType: 'panel',
                size: 'small',
                content: {
                  key: allergy.name,
                  component: (
                    <DisclosureComponent
                      {...allergy}
                      disclosureType="panel"
                    />
                  ),
                },
              });
            }}
          >
            <p>{allergy.name}</p>
          </Item>
        ))}
      </List>
    </ContentContainer>
  );
};

export default function SlidePanelManagerA11yExample() {
  return (
    <SlidePanelManager mainAriaLabel="Patient allergies">
      <ContentComponent />
    </SlidePanelManager>
  );
}
