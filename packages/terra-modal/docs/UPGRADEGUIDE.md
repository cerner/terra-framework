# Terra Modal - Upgrade Guide

## terra-modal 2.0/terra-modal-manager 2.0 => terra-modal 3.0
Terra Modal now implements the terra-disclosure-manager, so modal manager is no longer needed.

## Steps for uplifting from terra-modal 2.0
If you were previously consuming terra-modal directly, you will need to wrap your component or application with terra-modal, rather than pull the modal into implementation.
```diff
+import Modal from 'terra-modal';

const MyApplication = () => (
+  <Modal>
-  <MyComponent myProps={propData} />
+    <MyComponent myProps={propData} />
+  </Modal>
);
```

Within your component use the terra-app-delegate disclosure pattern to launch your modal.
```diff
  handleButtonClick() {
-    this.setState({ isOpen: true });
+    this.props.app.disclose({
+      preferredType: disclosureType,
+      size: disclosureSize,
+      content: {
+        key: 'my-modal-component-instance',
+        component: <MyModalComponent />
+      }
+    });
  }

  render() {
    return (
-      <div>
-        <Modal
-          ariaLabel="My Modal"
-          isOpen={this.state.isOpen}
-          onRequestClose={this.handleCloseModal}
-        >
-          <div>
-            <h1>My Modal</h1>
-            <p>Additional content goes here</p>
-            <button onClick={this.handleCloseModal}>Close Modal</button>
-          </div>
-       </Modal>
        <button onClick={this.handleButtonClick}>Open Modal</button>
-     </div>
    );
  }
```

## Steps for uplifting from terra-modal-manager 2.0
Only import needs to change, from terra-modal-manager to terra-modal.
```diff
-import ModalManager from 'terra-modal-manager';
+import Modal from 'terra-modal';

const MyApplication = () => (
-  <ModalManager>
+  <Modal>
    <MyComponent myProps={propData} />
-  </ModalManger>
+  </Modal>
);
```