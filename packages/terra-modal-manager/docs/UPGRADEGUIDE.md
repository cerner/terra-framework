# Terra Modal Manger - Upgrade Guide

## Steps for uplifting from terra-modal 2.0
If you were previously consuming terra-modal directly, you will need to wrap your component or application with terra-modal-manager, rather than pull the modal into implementation.
```diff
+import ModalManger from 'terra-modal-manager';

const MyApplication = () => (
+  <ModalManager>
-  <MyComponent myProps={propData} />
+    <MyComponent myProps={propData} />
+  </ModalManger>
);
```

Within your component use the terra-app-delegate disclosure pattern to launch your modal.
```diff
  handleButtonClick() {
-    this.setState({ isOpen: true });
+    this.props.app.disclose({
+      preferredType: 'modal',
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
-            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
-          </div>
-       </Modal>
        <button type="button" onClick={this.handleButtonClick}>Open Modal</button>
-     </div>
    );
  }
```
