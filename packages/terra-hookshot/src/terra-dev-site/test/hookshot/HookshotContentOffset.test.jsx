import React from 'react';
import HookshotTemplate from '../common/HookshotTestTemplate';

const ContentOffset = () => (
  <HookshotTemplate
    id="ContentOffset"
    contentAttachment="bottom end"
    targetAttachment="top start"
    targetOffset={{ vertical: 20, horizontal: -10 }}
    isOpen
  />
);

const HookshotExample = () => (
  <div>
    <ContentOffset />
    <p>Content Offset Applied. (Offset value is &quot;top-offset left-offset&quot;)</p>
    <ul>
      <li>Content Attachement: top end</li>
      <li>Target Attachement: bottom start</li>
      <li>Content Offset : 20px -10px</li>
    </ul>
    <button type="button" id="ltr-ContentOffset" onClick={() => { document.getElementsByTagName('html')[0].dir = 'ltr'; }}>LTR</button>
    <button type="button" id="rtl-ContentOffset" onClick={() => { document.getElementsByTagName('html')[0].dir = 'rtl'; }}>RTL</button>
  </div>
);

export default HookshotExample;
