import React from 'react';
import './All.module.scss';

const CustomDisplayTabPane = () => (
  <div className="proto-tabs">
    <p>Default Tabs - Success</p>
    <div role="tablist">
      <div role="tab">
        First
      </div>
      <div role="tab">
        Second
      </div>
      <div role="tab">
        Third
      </div>
    </div>
    <p>Tabs With TabIndex 0 - Success</p>
    <div role="tablist">
      <div role="tab" tabIndex="0">
        First
      </div>
      <div role="tab" tabIndex="0">
        Second
      </div>
      <div role="tab" tabIndex="0">
        Third
      </div>
    </div>
    <p>Tabs With TabIndex -1 - Success</p>
    <div role="tablist">
      <div role="tab" tabIndex="-1">
        First
      </div>
      <div role="tab" tabIndex="-1">
        Second
      </div>
      <div role="tab" tabIndex="-1">
        Third
      </div>
    </div>
    <p>Div Surrounded Tabs - Success</p>
    <div role="tablist">
      <div role="tab">
        First
      </div>
      <div>
        <div role="tab">
          Second
        </div>
        <div role="tab">
          Third
        </div>
      </div>
    </div>
    <p>Aria Hidden Tabs - Failed</p>
    <div role="tablist">
      <div role="tab">
        First
      </div>
      <div role="tab" aria-hidden="true">
        Second
      </div>
      <div role="tab" aria-hidden="true">
        Third
      </div>
    </div>
    <p>Display None Tabs - Failed</p>
    <div role="tablist">
      <div role="tab">
        First
      </div>
      <div role="tab" style={{ display: 'none' }}>
        Second
      </div>
      <div role="tab"  style={{ display: 'none' }}>
        Third
      </div>
    </div>
    <p>Div Surrounded Tabs with Aria Owns - Success</p>
    <div role="tablist" aria-owns="tab-1 tab-2">
      <div role="tab">
        First
      </div>
      <div>
        <div role="tab" id="tab-1">
          Second
        </div>
        <div role="tab" id="tab-2">
          Third
        </div>
      </div>
    </div>
    <p>Div Surrounded Tabs with Aria Owns And Aria Hidden - Failed</p>
    <div role="tablist" aria-owns="tab-3 tab-4">
      <div role="tab">
        First
      </div>
      <div>
        <div role="tab" id="tab-3" aria-hidden="true">
          Second
        </div>
        <div role="tab" id="tab-4" aria-hidden="true">
          Third
        </div>
      </div>
    </div>
    <p>Div Surrounded Tabs with Aria Owns And Display None - Failed</p>
    <div role="tablist" aria-owns="tab-5 tab-6">
      <div role="tab">
        First
      </div>
      <div>
        <div role="tab" id="tab-5" style={{ display: 'none' }}>
          Second
        </div>
        <div role="tab" id="tab-6" style={{ display: 'none' }}>
          Third
        </div>
      </div>
    </div>
    <p>Div Surrounded Tabs with Aria Owns Decoupled - Failed</p>
    <div role="tablist" aria-owns="tab-7 tab-8">
      <div role="tab">
        First
      </div>
    </div>
    <div>
      <div role="tab" id="tab-7">
        Second
      </div>
      <div role="tab" id="tab-8">
        Third
      </div>
    </div>  
  </div>
);

export default CustomDisplayTabPane;
