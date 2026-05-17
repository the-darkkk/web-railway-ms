import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trainsData } from '../data/trains';
import { BookingService } from '../services/BookingService';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

export default function Booking() {
 // wip

  return (
    <main className="container booking-page">
        <h2>БРОНЮВАННЯ МІСЦЬ</h2>
    </main>
  );
}