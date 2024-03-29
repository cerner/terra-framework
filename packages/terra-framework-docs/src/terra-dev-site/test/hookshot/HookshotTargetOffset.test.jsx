import React from 'react';
import HookshotTemplate from './common/HookshotTestTemplate';

const TargetOffset = () => (
  <HookshotTemplate
    id="TargetOffset"
    contentAttachment="bottom start"
    targetAttachment="top start"
    type="primary"
    targetOffset={{ vertical: -10, horizontal: -20 }}
    isOpen
  />
);

const HookshotExample = () => (
  <div>
    <TargetOffset />
    <p>Target Offset Applied. (Offset value is &quot;top-offset left-offset&quot;)</p>
    <ul>
      <li>Content Attachement: bottom start</li>
      <li>Target Attachement: top start</li>
      <li>Target Offset: -10px -20px</li>
    </ul>
    <button type="button" id="ltr-TargetOffset" onClick={() => { document.getElementsByTagName('html')[0].dir = 'ltr'; }}>LTR</button>
    <button type="button" id="rtl-TargetOffset" onClick={() => { document.getElementsByTagName('html')[0].dir = 'rtl'; }}>RTL</button>
  </div>
);

export default HookshotExample;
