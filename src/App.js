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
        const id = Math.floor(Math.random() * 10) + 1;
        const banner = id % 2 === 0 ? { w: 1660, h: 260 } : { w: 840, h: 480 };

        const response = await axios.post('http://localhost:8080/bid', {
          id: id.toString(),
          imp: [{ id: `imp${id}`, banner: banner }],
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
        {/* Display the ad markup */}
        {ad && <div dangerouslySetInnerHTML={{ __html: ad.seatbid[0].bid[0].adm }} />}
        <div>Ad ID: {ad && ad.seatbid[0].bid[0].adid}</div>
        <div>Price: {ad && ad.seatbid[0].bid[0].price}</div>
        <div>Impression URL: {ad && ad.seatbid[0].bid[0].nurl}</div>
      </header>
    </div>
  );
}

export default App;
