import React from 'react';
import VitalBlock from './VitalBlock';

const BabyPosition = ({ position }) => {
  return (
    <VitalBlock
      title="Baby Position"
      value={position}
      icon={<span>🛌️</span>}
    />
  );
};

export default BabyPosition;
