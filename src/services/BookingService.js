const STORAGE_KEY = 'railway_bookings';

export const BookingService = {
  getBookedSeats: async (trainId, wagonId) => {
    await new Promise(resolve => setTimeout(resolve, 300)); // fake delay idk why
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    if (!data[trainId] || !data[trainId][wagonId]) return [];
    return data[trainId][wagonId];
  },

  saveBooking: async (trainId, wagonId, seats, userData) => { // userdata is useless
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    if (!data[trainId]) data[trainId] = {};
    if (!data[trainId][wagonId]) data[trainId][wagonId] = [];

    data[trainId][wagonId] = [...data[trainId][wagonId], ...seats];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    return { success: true };
  }
};