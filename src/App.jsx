import React, { useState, useEffect } from 'react';
import DateSelector from './components/DateSelector';
import CosmicDisplay from './components/CosmicDisplay';
import StarryBackground from './components/StarryBackground';
import './App.scss';

function App() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [cosmicData, setCosmicData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCosmicData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        );
        
        if (!response.ok) {
          throw new Error('Gagal menembus atmosfer NASA. Coba tanggal lain!');
        }
        
        const data = await response.json();
        setCosmicData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCosmicData();
  }, [date]);

  return (
    <div className="space-app">
      <StarryBackground />
      
      <div className="app-container">
        <header className="app-header">
          <h1 className="glowing-text">🌌 Cosmic Explorer</h1>
          <p>Cari tahu apa yang dilihat teleskop NASA pada tanggal pilihanmu!</p>
        </header>

        <DateSelector date={date} setDate={setDate} />

        {loading && (
          <div className="loader">
            <div className="spinner"></div>
            <p>📡 Menghubungi satelit NASA...</p>
          </div>
        )}
        
        {error && (
          <div className="error-alert">
            <span className="error-icon">❌</span> {error}
          </div>
        )}

        {!loading && !error && cosmicData && (
          <CosmicDisplay cosmicData={cosmicData} />
        )}
      </div>
    </div>
  );
}

export default App;
