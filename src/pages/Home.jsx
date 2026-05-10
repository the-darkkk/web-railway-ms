import { useState } from 'react';
import { trainsData } from '../data/trains';
import TrainList from '../components/TrainList';

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredTrains = trainsData.filter(train => {
    const s = query.toLowerCase();
    return (
      train.route.from.toLowerCase().includes(s) ||
      train.route.to.toLowerCase().includes(s) ||
      train.trainNumber.toLowerCase().includes(s)
    );
  });

  return (
    <main className="container">
      <div className="hero-section">
        <h1>Куди їдемо сьогодні?</h1>
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Номер потяга або місто (напр. Львів)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <TrainList trains={filteredTrains} />
    </main>
  );
}