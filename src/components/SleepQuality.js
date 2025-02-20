import React from 'react';
import VitalBlock from './VitalBlock';

const SleepQuality = ({ quality }) => {
  return (
    <VitalBlock
      title="Sleeping Quality"
      value={quality}
      icon={<span>😌</span>}
    />
  );
};

export default SleepQuality;
