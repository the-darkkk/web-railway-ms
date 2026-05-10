import TrainCard from './TrainCard';

export default function TrainList({ trains }) {
  if (trains.length === 0) {
    return (
      <div className="board-container">
        <div className="empty-state">
          NO DEPARTURES FOUND
        </div>
      </div>
    );
  }

  return (
    <div className="board-container">
      {}
      <div className="board-header">
        <div>Time</div>
        <div>Train</div>
        <div>Destination</div>
        <div>Duration</div>
        <div>Action</div>
      </div>

      {/* Рядки табло */}
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}