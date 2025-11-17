import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashBoard from "./pages/UserDashBoard";
import UserAdmin from "./pages/UserAdmin";
import CustomerBooking from "./pages/CustomerBooking";
import AdminBooking from "./pages/AdminBooking";
import Register from "./pages/Register";

function App() {
  return (
    <div className=" App">
      <Routes>
        {/*this is login page route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/admin" element={<UserAdmin />} />
        <Route path="/booking" element={<CustomerBooking />} />
        <Route path="/user-booking" element={<AdminBooking />} />
      </Routes>
    </div>
  );
}

export default App;

//https://react-icons.github.io/react-icons/icons/fa/ --> react icons library
