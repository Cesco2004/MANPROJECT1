import React from 'react';
import VitalBlock from './VitalBlock';


const HeartRate = ({ bpm }) => {
  return (
    <VitalBlock
      title="Heart Rate"
      value={`${bpm} BPM`}
      icon={<span>💓</span>}
      alert={bpm > 160 || bpm < 100}
    />
  );
};

export default HeartRate; // Export par défaut
