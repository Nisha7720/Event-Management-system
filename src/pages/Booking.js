import React from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Booking= () => {
  console.log("Rendering BookingPage");

  const events = useSelector((state) => state?.event.events);
   const navigate = useNavigate();
   // console.log("Events in BookingPage:", events);

  return (

    //console.log("Rendering BookingPage - Return JSX"),

    <div className="min-h-screen bg-indigo-200 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Booking Page</h2>

      <div className="bg-white p-6 rounded shadow-md w-[400px]">
        <h3 className="text-xl font-semibold mb-3">Available Events for Booking</h3>
        {events.length === 0 ? (
          <p className="text-gray-500 text-sm">No events available right now.</p>
        ) : (
          events.map((event) => (
            <div
              key={event?.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{event.name}</span>
              <button className="bg-green-400 text-white px-3 py-1 rounded text-md">
                Book Now
              </button>
            </div>
          ))
        )}
      </div>

     <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>

      </div>
  );
};

export default Booking;
