import React from 'react';
import Tabs from 'terra-tabs';

class ControlledTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 'Hematology' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (selectedKey !== this.state.activeKey) {
      this.setState({ activeKey: selectedKey });
    }
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

    return (
      <div>
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
        </Tabs>
      </div>
    );
  }
}
export default ControlledTabs;
