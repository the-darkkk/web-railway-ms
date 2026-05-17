export default function SeatMap({ wagonId, totalSeats, bookedSeats, selectedSeats, onSeatClick }) {
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  return (
    <div className="seat-map-container">
      <h3 className="wagon-title">ВАГОН № {wagonId}</h3>
      <div className="seat-grid">
        {seats.map(seat => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.some(s => s.wagon === wagonId && s.seat === seat);
          
          let seatClass = 'seat-free';
          if (isBooked) seatClass = 'seat-booked';
          if (isSelected) seatClass = 'seat-selected';

          return (
            <button
              key={seat}
              disabled={isBooked}
              className={`seat ${seatClass}`}
              onClick={() => onSeatClick(wagonId, seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}