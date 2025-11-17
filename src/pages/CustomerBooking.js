import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/slices/BookinSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const CustomerBooking = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const event = state?.event;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [seats, setSeats] = useState(1);

  if (!event) return <p>Event not found!</p>;

  const handleBooking = () => {
    if (!currentUser) {
      toast.warn("Please login first!");
      return;
    }

    dispatch(
      addBooking({
        id: Date.now(),
        eventId: event.id,
        eventName: event.name,
        customerName: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone || "",
        seats: Number(seats),
        date: new Date().toLocaleString(),
      })
    );

    toast.success("Booking successful!");
    setSeats(1);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Book Event: {event.name}</h2>

      <input
        type="number"
        placeholder="Seats"
        value={seats}
        min={1}
        onChange={(e) => setSeats(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default CustomerBooking;
