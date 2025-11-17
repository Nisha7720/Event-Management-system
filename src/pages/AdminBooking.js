import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chancelBooking } from "../redux/slices/BookinSlice";
import { useNavigate } from "react-router-dom";

const AdminBooking = () => {
  const bookings = useSelector((state) => state?.booking?.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      dispatch(chancelBooking(id));
    }
  };

  console.log("show data user");
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            className="border p-4 rounded mb-3 shadow bg-white flex justify-between items-start"
          >
            <div>
              <h3 className="text-xl font-semibold">{b.eventName}</h3>
              <p>
                <b>Customer Name:</b> {b.customerName}
              </p>
              <p>
                <b>Email:</b> {b.email}
              </p>
              <p>
                <b>Seats:</b> {b.seats}
              </p>
              <p>
                <b>Booking Date:</b> {b.date}
              </p>
            </div>
            <button
              onClick={() => handleDelete(b.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

            <button
              onClick={() => navigate("/admin")}
              className="mt-6 bg-blue-400 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminBooking;
