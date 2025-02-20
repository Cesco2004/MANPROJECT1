import React from 'react';

const Recommendations = () => {
  const advice = (
    <div>
      <p>Based on the current vital signs, your baby seems to be in a comfortable state. The heart rate and breathing rate are within normal ranges, indicating a calm and relaxed environment.</p>
      <p>To further enhance your baby's well-being, consider maintaining a consistent room temperature and ensuring adequate ventilation. Regularly monitor the sleep position to ensure safety and comfort.</p>
    </div>
  );

  return (
    <div>
      <h2>Recommendations</h2>
      {advice}
    </div>
  );
};

export default Recommendations;
