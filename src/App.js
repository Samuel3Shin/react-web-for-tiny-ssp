import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAd() {
      try {
        const response = await axios.post('http://localhost:8080/bid', {
          id: '1',
          imp: [{ id: 'imp1', banner: { w: 300, h: 250 } }],
        });
        setAd(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchAd();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        {/* Here we assume that the ad content is in ad.seatbid[0].bid[0].adid, modify it to reflect your actual ad structure */}
        <div>Ad ID: {ad && ad.seatbid[0].bid[0].adid}</div>
        <div>Price: {ad && ad.seatbid[0].bid[0].price}</div>
        <div>Impression URL: {ad && ad.seatbid[0].bid[0].nurl}</div>
      </header>
    </div>
  );
}

export default App;
