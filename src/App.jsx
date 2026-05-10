import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const BookingStub = () => <div className="container"><h2>Бронювання місць</h2></div>;

function App() {
  return (
    <BrowserRouter>
      <header className="main-header">
        <div className="container header-content">
          <Link to="/" className="logo">RAILWAY MS</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<BookingStub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;