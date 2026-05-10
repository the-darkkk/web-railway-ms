import TrainCard from './TrainCard';

export default function TrainList({ trains }) {
  if (trains.length === 0) {
    return (
      <div className="empty-state">
        <p>На жаль, потягів за вашим запитом не знайдено 🚆</p>
      </div>
    );
  }

  return (
    <div className="train-list-grid">
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}