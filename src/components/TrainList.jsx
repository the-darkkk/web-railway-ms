import TrainCard from './TrainCard';

export default function TrainList({ trains }) {
  if (trains.length === 0) {
    return (
      <div className="board-container">
        <div className="empty-state">
          Не знайдено рейсів
        </div>
      </div>
    );
  }

  return (
    <div className="board-container">
      {}
      <div className="board-header">
        <div>Час</div>
        <div>Рейс</div>
        <div>Напрямок</div>
        <div>Тривалість</div>
        <div>Дія</div>
      </div>

      {/* Рядки табло */}
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}