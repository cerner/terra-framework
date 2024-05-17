import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterPills, { Pill } from '@cerner/terra-pills';

const propTypes = {
  /**
  * Aria label for pills container
  */
  ariaLabel: PropTypes.string,
  /**
  * Additional styling
  */
  className: PropTypes.string,
  /**
   * Pills to be rendered
   */
  data: PropTypes.array,
  /**
   * Whether or not the rollup is shown
   */
  isCollapsible: PropTypes.bool,
};

const defaultProps = {
  isCollapsible: false,
};
const PillTemplate = ({
  data, ariaLabel, className, isCollapsible,
}) => {
  const [pills, setPills] = useState(data);
  const [counter, setCounter] = useState(0);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  const handleAddPills = () => {
    const oldPills = pills;
    const pill = {
      label: `test-pill- ${counter}`,
      id: `test-filter-pills-test-${counter}`,
    };
    setCounter(newCounter => newCounter + 1);
    oldPills.push(pill);
    setPills(oldPills);
  };

  return (
    <>
      <FilterPills
        ariaLabel={ariaLabel}
        onRemove={handleOnRemove}
        className={className}
        isCollapsible={isCollapsible}
      >
        {pills.map((pill, index) => (
          <Pill
            label={pill.label}
            labelCategory={pill.labelCategory}
            id={pill.id}
            key={pill.id}
            metaData={{ index }}
            showPopupHeader
          />
        ))}
      </FilterPills>
      {pills.length <= 0
        && <button type="button" onClick={() => setPills(data)}>Show Pills</button>}
      {isCollapsible
        && <button type="button" onClick={handleAddPills}> Add more pills</button>}

    </>
  );
};

PillTemplate.propTypes = propTypes;
PillTemplate.defaultProps = defaultProps;
export default PillTemplate;
