import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/Navbar.jsx'; 
import Animation from './components/Animation.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 40);

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
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
