import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingStub = () => <div className="container"><h2>Бронювання місць</h2></div>;

function App() {
  return (
    <BrowserRouter>
      <header className="main-header">
        <div className="container header-content">
          <Link to="/" className="logo"><img src="/logo.png" width="10%" alt="Українські Залізничні Лінії" /></Link>
        </div>
      </header>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<Booking />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </BrowserRouter>
  );
}

export default App;