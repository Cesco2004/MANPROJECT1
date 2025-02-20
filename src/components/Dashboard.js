import React, { useState, useEffect } from 'react';
import HeartRate from './HeartRate';
import Temperature from './Temperature';
import BreathingRate from './BreathingRate';
import SleepQuality from './SleepQuality';
import BabyPosition from './BabyPosition';
import CryingSounds from './CryingSounds';
import Recommendations from './Recommendations';
import '../App.css'; // Correction du chemin d'importation

const Dashboard = () => {
  const [data, setData] = useState({
    bpm: 120,
    temp: 98.4,
    rate: 40,
    quality: "Peaceful",
    position: "On the back",
    crying: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        bpm: Math.floor(Math.random() * (125 - 120 + 1)) + 120,
        temp: (98.4 + Math.random() * 0.5).toFixed(1),
        rate: Math.floor(Math.random() * (45 - 40 + 1)) + 40,
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="dashboard">
        <HeartRate bpm={data.bpm} />
        <Temperature temp={data.temp} />
        <BreathingRate rate={data.rate} />
        <SleepQuality quality={data.quality} />
        <BabyPosition position={data.position} />
        <CryingSounds crying={data.crying} />
      </div>
      <div className="recommendations-section">
        <Recommendations />
      </div>
    </div>
  );
};

export default Dashboard;
