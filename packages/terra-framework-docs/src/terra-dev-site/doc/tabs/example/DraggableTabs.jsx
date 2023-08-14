import React from 'react';
import Tabs from 'terra-tabs';
import IconInformation from 'terra-icon/lib/icon/IconInformation';

class DraggableTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 'Hematology' };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleTabActivation = this.handleTabActivation.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (selectedKey !== this.state.activeKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  handleTabActivation() {
    this.setState({ activeKey: 'Radiology' });
  }

  render() {
    const tab1 = (
      <Tabs.Pane label="Radiology" key="Radiology" id="tab1">
        <p id="tab1">
          Radiology represents a branch of medicine that deals with radiant energy in the diagnosis and treatment of diseases.
          This field can be divided into two broad areas - diagnostic radiology and interventional radiology.
          A physician who specializes in radiology is called radiologist.
        </p>
      </Tabs.Pane>
    );

    const tab2 = (
      <Tabs.Pane label="Hematology" key="Hematology" id="tab2">
        <p id="tab2">
          Hematology is the study of blood and blood disorders.
          Hematologists and hematopathologists are highly trained healthcare providers who specialize in diseases of the blood and blood components.
          These include blood and bone marrow cells.
        </p>
      </Tabs.Pane>
    );

    const tab3 = (
      <Tabs.Pane label="Cardiology" key="Cardiology" id="tab3">
        <p id="tab3">
          The term cardiology is derived from the Greek words “cardia,” which refers to the heart and “logy” meaning “study of.”
          Cardiology is a branch of medicine that concerns diseases and disorders of the heart.
          It may range from congenital defects through to acquired heart diseases such as coronary artery disease and congestive heart failure.
          Physicians who specialize in cardiology are called cardiologists and they are responsible for the medical management of various heart diseases.
          Cardiac surgeons are the specialist physicians who perform surgical procedures to correct heart disorders.
        </p>
      </Tabs.Pane>
    );
    const tab4 = (
      <Tabs.Pane icon={<IconInformation />} isIconOnly label="Orthopaedics" key="Orthopaedics" id="tab4">
        <p id="tab4">
          Orthopaedic surgery refers to surgical intervention in the case of diseases or injuries concerning the musculoskeletal system.
          After proper diagnoses and consultation, orthopaedic surgeons treat several conditions that affect the bones, joints, ligaments, nerves and muscles.
        </p>
      </Tabs.Pane>
    );

    const tab5 = (
      <Tabs.Pane icon={<IconInformation />} showIcon label="Paediatrics" key="Paediatrics" id="tab5">
        <p id="tab5">
          Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18.
          The word “paediatrics” means “healer of children”; they are derived from two Greek words: (pais = child) and (iatros = doctor or healer).
          Paediatrics is a relatively new medical specialty, developing only in the mid-19th century. Abraham Jacobi (1830–1919) is known as the father of paediatrics.
        </p>
      </Tabs.Pane>
    );

    const tab6 = (
      <Tabs.Pane label="Oncology" key="Oncology" id="tab6">
        <p id="tab6">
          Oncology is the study of cancer.
          An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer.
          An oncologist may also be called a cancer specialist.
          The field of oncology has 3 major areas based on treatments: medical oncology, radiation oncology, and surgical oncology.
        </p>
      </Tabs.Pane>
    );

    return (
      <div>
        <button id="activate-tab" type="button" onClick={this.handleTabActivation}>Activate Tab</button>
        <div id="current-selection">
          <p>
            Last Triggered Tab:
            {this.state.activeKey}
          </p>
        </div>
        <Tabs isDraggable id="controlledTabs" onChange={this.handleSelection} activeKey={this.state.activeKey}>
          {tab1}
          {tab2}
          {tab3}
          {tab4}
          {tab5}
          {tab6}
        </Tabs>
      </div>
    );
  }
}
export default DraggableTabs;
