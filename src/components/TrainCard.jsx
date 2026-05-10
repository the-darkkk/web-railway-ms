import { Link } from 'react-router-dom';

export default function TrainCard({ train }) {
  return (
    <div className="train-card">
      <div className="train-card-header">
        <span className="train-id">№ {train.trainNumber}</span>
        <span className="train-duration">⏱ {train.duration}</span>
      </div>
      
      <div className="train-route">
        <div className="route-point">
          <span className="city">{train.route.from}</span>
          <span className="time">{train.departureTime}</span>
        </div>
        <div className="route-arrow">➔</div>
        <div className="route-point">
          <span className="city">{train.route.to}</span>
          <span className="date">{train.departureDate}</span>
        </div>
      </div>

      <Link to={`/booking/${train.id}`} className="book-link">
        Вибрати квитки
      </Link>
    </div>
  );
}