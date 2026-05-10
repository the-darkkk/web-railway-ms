import { useState } from 'react';
import { trainsData } from '../data/trains';
import TrainList from '../components/TrainList';

export default function Home() {
  const [query, setQuery] = useState('');

const filteredAndSortedTrains = trainsData
    .filter(train => {
      const s = query.toLowerCase();
      return (
        train.route.from.toLowerCase().includes(s) ||
        train.route.to.toLowerCase().includes(s) ||
        train.trainNumber.toLowerCase().includes(s)
      );
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.departureDate}T${a.departureTime}`);
      const dateB = new Date(`${b.departureDate}T${b.departureTime}`);
      return dateA - dateB;
    });

  return (
    <main className="container">
      <div className="hero-section">
        <h1>Розклад рейсів</h1>
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="ВВЕДІТЬ НАПРЯМОК АБО НОМЕР РЕЙСУ..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <TrainList trains={filteredAndSortedTrains} />
    </main>
  );
}