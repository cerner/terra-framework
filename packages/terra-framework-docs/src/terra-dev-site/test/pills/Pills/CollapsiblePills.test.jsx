import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Pills from 'terra-pills/lib/index';
import styles from '../PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsibleBasicPills = () => {
  const pillsData = [
    {
      label: 'asthma',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro',
    },
    {
      label: 'fibro1',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro1',
    },
    {
      label: 'fibro2',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro2',
    },
    {
      label: 'fibro3',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro3',
    },
    {
      label: 'fibro4',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro4',
    },
  ];
  const [pillsState] = useState(pillsData);
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <p>In consistent with keyboard navigation and removal when its collapsed </p>
      <Pills
        ariaLabel="Example of a Collapsible Basic Pill"
        isCollapsed={isCollapsed}
        onSelectRollUp={() => setIsCollapsed(false)}
        className={cx(['container', 'show-border', 'width-200'])}
      >
        {pillsState.map((pill, index) => (
          <Pills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            isRemovable
            metaData={{ index }}
            // eslint-disable-next-line no-param-reassign
            refCallback={(node) => { pill.ref.current = node; }}
          />
        ))}
      </Pills>
    </>
  );
};

export default CollapsibleBasicPills;
