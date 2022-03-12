import React from 'react';
import HookshotTemplate from './common/HookshotTestTemplate';

const NoCloseBehavior = () => (
  <HookshotTemplate
    id="NoCloseBehavior"
    type="primary"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: false }}
  />
);

const EscBehavior = () => (
  <HookshotTemplate
    id="EscBehavior"
    type="primary"
    hookshotContentProps={{ closeOnEsc: true, closeOnOutsideClick: false, closeOnResize: false }}
  />
);

const OutsideClickBehavior = () => (
  <HookshotTemplate
    id="OutsideClickBehavior"
    type="primary"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: true, closeOnResize: false }}
  />
);

const OutsideClickBehaviorWithSvgs = () => (
  <HookshotTemplate
    id="OutsideClickBehaviorWithSvgs"
    type="primary"
    includeSvgs
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: true, closeOnResize: false }}
  />
);

const ResizeBehavior = () => (
  <HookshotTemplate
    id="ResizeBehavior"
    type="primary"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: true }}
  />
);

const AllBehavior = () => (
  <HookshotTemplate
    id="AllBehavior"
    type="primary"
    hookshotContentProps={{ closeOnEsc: true, closeOnOutsideClick: true, closeOnResize: true }}
  />
);

const HookshotExample = () => (
  <div>
    <p>All Close Behavior</p>
    <AllBehavior />
    <p>Close on ESC Behavior</p>
    <EscBehavior />
    <p>Close on Outside Click Behavior</p>
    <OutsideClickBehavior />
    <p>Close on Outside Click Behavior With SVGs</p>
    <OutsideClickBehaviorWithSvgs />
    <p>Close on Resize Behavior</p>
    <ResizeBehavior />
    <p>No Close Behavior - Once opened, content stays on the screen when scrolling occurs.</p>
    <NoCloseBehavior />
    <button type="button" id="scroll-bounds">Scroll Button</button>
  </div>
);

export default HookshotExample;
