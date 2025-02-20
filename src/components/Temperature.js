import React from 'react';
import VitalBlock from './VitalBlock';

const Temperature = ({ temp }) => {
  return (
    <VitalBlock
      title="Body Temperature"
      value={`${temp} °F`}
      icon={<span>🌡️</span>}
      alert={temp > 97 || temp < 99}
    />
  );
};

export default Temperature;
