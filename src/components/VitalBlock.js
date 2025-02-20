import React from 'react';
import '../styles/VitalBlock.css';

const VitalBlock = ({ title, value, icon, alert }) => {
  return (
    <div className={`vital-block ${alert ? 'alert' : ''}`}>
      <div className="vital-icon">{icon}</div>
      <div className="vital-info">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default VitalBlock;
