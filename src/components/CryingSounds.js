import React from 'react';
import VitalBlock from './VitalBlock';

const CryingSounds = ({ crying }) => {
  return (
    <VitalBlock
      title="Crying Sounds"
      value={crying ? "Bébé pleure" : "Calm"}
      icon={<span>😪</span>}
    />
  );
};

export default CryingSounds;
