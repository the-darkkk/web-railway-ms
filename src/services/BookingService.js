const STORAGE_KEY = 'railway_bookings';

export const BookingService = {
  getAllBookedSeats: async (trainId) => {
    await new Promise(resolve => setTimeout(resolve, 300)); 
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    // { wagonNumber: [seatNumbers] }
    return data[trainId] || {}; 
  },

  saveBooking: async (trainId, selectedSeats, userData) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    if (!data[trainId]) data[trainId] = {};

    // array of objects [{ wagon: 1, seat: 5 }, { wagon: 2, seat: 12 }]
    selectedSeats.forEach(({ wagon, seat }) => {
      if (!data[trainId][wagon]) data[trainId][wagon] = [];
      data[trainId][wagon].push(seat);
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log('Дані пасажира:', userData);
    return { success: true };
  }
};