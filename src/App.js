import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserDashBoard from './pages/UserDashBoard';
import UserAdmin from './pages/UserAdmin';
import Booking from './pages/Booking';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/dashboard" element={<UserDashBoard />} />
          <Route path="/admin" element={<UserAdmin />} />
          <Route path="/booking" element={<Booking />} />

        </Routes>
    </div>
  );
}

export default App;
