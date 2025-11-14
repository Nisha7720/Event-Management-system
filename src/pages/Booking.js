import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../redux/slices/BookinSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyBookingsPage = () => {
  //console.log("MyBookingsPage Rendered");
  const bookings = useSelector((state) => state?.booking?.bookings);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myBookings = bookings.filter((b) => b?.username === user?.name);

  const handleCancel = (id) => {
   dispatch(cancelBooking(id));
    toast.info("Booking cancelled!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">My Bookings</h2>

      <div className="bg-white p-6 rounded shadow-md w-[400px]">
        {myBookings?.length === 0 ? (
          <p className="text-gray-500 text-sm">You have no bookings yet.</p>
        ) : (
          myBookings?.map((booking) => (
            <div
              key={booking.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{booking.eventName}</span>
              <button
                onClick={() => handleCancel(booking.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Cancel
              </button>

              <button>

              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
         Log Out
     </button>
    </div>
  );
};

export default MyBookingsPage;
