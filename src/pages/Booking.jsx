import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trainsData } from '../data/trains';
import { BookingService } from '../services/BookingService';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { toast } from 'react-toastify';

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trainsData.find(t => t.id === trainId);

  const [allBookedSeats, setAllBookedSeats] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]); 
  const [loading, setLoading] = useState(false);

  const wagons = [1, 2, 3, 4, 5]; 
  const TOTAL_SEATS = 54;

  useEffect(() => {
    BookingService.getAllBookedSeats(trainId).then(data => {
      setAllBookedSeats(data);
    });
  }, [trainId]);

  const handleSeatClick = (wagonId, seatNumber) => {
    const isAlreadySelected = selectedSeats.some(s => s.wagon === wagonId && s.seat === seatNumber);
    
    if (isAlreadySelected) {
      setSelectedSeats(selectedSeats.filter(s => !(s.wagon === wagonId && s.seat === seatNumber)));
    } else {
      setSelectedSeats([...selectedSeats, { wagon: wagonId, seat: seatNumber }]);
    }
  };

  const handleBooking = async (userData) => {
    setLoading(true);
    await BookingService.saveBooking(trainId, selectedSeats, userData);
    
    const formattedSeats = selectedSeats.map(s => `В${s.wagon}-М${s.seat}`).join(', ');
    toast.success(`Успішно! Заброньовано: ${formattedSeats}`);
    
    setLoading(false);
    navigate('/');
  };

  if (!train) return <div className="empty-state">РЕЙС НЕ ЗНАЙДЕНО</div>;

  return (
    <main className="container booking-page">
      <div className="booking-header">
        <h2>РЕЙС: {train.trainNumber} | {train.route.from} ➔ {train.route.to}</h2>
        <p>ВІДПРАВЛЕННЯ: {train.departureDate} О {train.departureTime}</p>
      </div>

      <div className="booking-content">
        <div className="wagons-scroll-container">
          <div className="legend sticky-legend">
            <span className="legend-item"><div className="seat seat-free"></div> ВІЛЬНО</span>
            <span className="legend-item"><div className="seat seat-selected"></div> ОБРАНО</span>
            <span className="legend-item"><div className="seat seat-booked"></div> ЗАЙНЯТО</span>
          </div>
          
          {wagons.map(wagon => (
            <SeatMap 
              key={wagon}
              wagonId={wagon} 
              totalSeats={TOTAL_SEATS} 
              bookedSeats={allBookedSeats[wagon] || []} 
              selectedSeats={selectedSeats} 
              onSeatClick={handleSeatClick} 
            />
          ))}
        </div>
        
        <div className="right-panel">
          <BookingForm onSubmit={handleBooking} disabled={loading} selectedCount={selectedSeats.length} />
          
          {selectedSeats.length > 0 && (
            <div className="selected-summary">
              <h4>ОБРАНІ МІСЦЯ:</h4>
              <ul>
                {selectedSeats.map((s, idx) => (
                  <li key={idx}>Вагон {s.wagon}, Місце {s.seat}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}