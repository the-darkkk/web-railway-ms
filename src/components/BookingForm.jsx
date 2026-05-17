import { useState } from 'react';

export default function BookingForm({ onSubmit, disabled, selectedCount }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>ДАНІ ПАСАЖИРА</h3>
      <input required type="text" name="name" placeholder="ПІБ" value={formData.name} onChange={handleChange} className="search-input" />
      <input required type="tel" name="phone" placeholder="ТЕЛЕФОН" value={formData.phone} onChange={handleChange} className="search-input" />
      <input required type="email" name="email" placeholder="EMAIL" value={formData.email} onChange={handleChange} className="search-input" />
      
      <button type="submit" disabled={disabled || selectedCount === 0} className="submit-btn">
        ПІДТВЕРДИТИ ({selectedCount} МІСЦЬ)
      </button>
    </form>
  );
}