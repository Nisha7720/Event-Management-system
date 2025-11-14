
 import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addBooking } from "../redux/slices/BookinSlice";

const Customer = () => {
  const events = useSelector((state) => state.event?.events);
  const bookings = useSelector((state) => state.booking?.bookings);
   const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBook = (event) => {
    const alreadyBooked = bookings.find(
      (b) => b.eventId === event.id && b.username === user.name
    );

    if (alreadyBooked) {
      toast.info("You already booked this event!");
      return;
    }

    const booking = {
      id: Date.now(),
      eventId: event.id || "New ID",
      eventName: event.name || "Event Name",
      username: user.name || "user name",
      eventDesc:event.description,
      eventLoc : event.location,
      eventDate: event.date,
      date: new Date().toLocaleDateString(),
    };
    //console.log(event.name, user.name);

    dispatch(addBooking(booking));
    toast.success("Event booked successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Customer Dashboard</h2>

      <div className="bg-gray-300 p-6 rounded shadow-md w-[800px] h-[500px] ">
        <h3 className="text-xl font-semibold mb-3">Available Events</h3>
        {events.length === 0 ? (
          <p className="text-gray-500 text-sm">No events available right now.</p>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="flex justify-between items-center border-b py-2"
            >
                <span>{event.name}</span>
                <span>{event.description}</span>
                <span>{event.location}</span>
                <span>{event.date}</span>

              <button
                onClick={() => handleBook(event)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue:600"
              >
                Book
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/booking")}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        My Bookings
      </button>

      <button
        onClick={() => navigate("/")}
        className="mt-3 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Customer;
