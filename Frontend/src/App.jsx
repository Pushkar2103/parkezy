import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/Navbar.jsx'; 
import Animation from './components/Animation.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import HomePage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import ParkingDetails from './components/ParkingDetails.jsx'; 
import BookingHistory from './components/BookingHistory.jsx';
import BookingConfirmation from './components/BookingConfirmation.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Animation />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/parking-details/:id' element={<ParkingDetails />} />
            <Route path='/booking-history' element={<BookingHistory />} />
            <Route path='/booking-confirmation/:id' element={<BookingConfirmation />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
