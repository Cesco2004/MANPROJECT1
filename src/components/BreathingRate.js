import React from 'react';
import VitalBlock from './VitalBlock';

const BreathingRate = ({ rate }) => {
  return (
    <VitalBlock
      title= "Respiratory Rate"
      value={`${rate} resp/min`}
      icon={<span>🫁</span>}
      alert={rate > 60 || rate < 30}
    />
  );
};

export default BreathingRate;
