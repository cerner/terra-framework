import React from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Pills from '@cerner/terra-pills/lib/index';
import styles from './_DocExamplesCommon.module.scss';

const cx = classNames.bind(styles);

const StandardPillsGroup = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx(['standard-pill-container-example', theme.className])}>
      <p
        id="terra-pills-example-standard-pill-container-label"
        className={cx('pill-container-label')}
      >
        Your Focus Areas:
      </p>
      <Pills
        ariaLabel="Your Focus Areas:"
        ariaLabelledBy="terra-pills-example-standard-pill-container-label"
        className={cx('inline-pill-container')}
      >
        <Pills.Pill label="Preventative Health" pillKey="Preventative Health" id="terra-pills-example-standard-pills-group-preventativehealth" />
        <Pills.Pill label="Physical Activity" pillKey="Physical Activity" id="terra-pills-example-standard-pills-group-physicalactivity" />
        <Pills.Pill label="Nutrition" pillKey="Nutrition" id="terra-pills-example-standard-pills-group-nutrition" />
      </Pills>
    </div>
  );
};

export default StandardPillsGroup;
