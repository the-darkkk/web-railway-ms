import { Link } from 'react-router-dom';

export default function TrainCard({ train }) {
  return (
    <div className="board-row">
      <div className="board-col">
        <span className="time">{train.departureTime}</span>
        <span className="duration" style={{ fontSize: '1rem' }}>{train.departureDate}</span>
      </div>
      
      <div className="board-col">
        <span className="train-num">{train.trainNumber}</span>
      </div>
      
      <div className="board-col route">
        {train.route.from} ➔ {train.route.to}
      </div>
      
      <div className="board-col">
        <span className="duration">{train.duration}</span>
      </div>

      <div className="board-col">
        <Link to={`/booking/${train.id}`} className="book-link">
          SELECT
        </Link>
      </div>
    </div>
  );
}