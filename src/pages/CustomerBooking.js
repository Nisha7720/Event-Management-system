import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/slices/BookinSlice"; // <-- FIXED FILE NAME

const CustomerBooking = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state?.user?.user);
  const bookings = useSelector((state) => state?.booking?.bookings);
  const events = useSelector((state) => state?.event?.events);

  const [seats, setSeats] = useState(1);

  if (!currentUser) {
    return <div className="p-4 text-red-500">Please login first!</div>;
  }

  const handleBooking = (event) => {
    dispatch(
      addBooking({
        id: Date.now(),
        eventId: event.id,
        eventName: event.name,
        customerName: currentUser.name,
        email: currentUser.email,
        seats,
        date: new Date().toLocaleString(),
      })
    );
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">My Bookings</h2>

      {events?.map((event) => (
        <div key={event.id} className="p-3 border mb-4">
          <p>
            <b>{event.name}</b>
          </p>

          <button
            onClick={() => handleBooking(event)}
            className="bg-blue-600 text-white px-3 py-1 mt-2"
          >
            Book Event
          </button>
        </div>
      ))}

      <hr className="my-6" />

      <h3 className="font-bold text-lg mt-4">Your Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings
          .filter((b) => b.customerName === currentUser.name)
          .map((booking) => (
            <div key={booking.id} className="p-3 border mb-2">
              <p>
                <b>Event:</b> {booking.eventName}
              </p>
              <p>
                <b>Date:</b> {booking.date}
              </p>
              <p>
                <b>Seats:</b> {booking.seats}
              </p>
            </div>
          ))
      )}
    </div>
  );
};

export default CustomerBooking;
