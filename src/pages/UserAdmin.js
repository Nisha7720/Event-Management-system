import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../redux/slices/EventSlices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateEventForm from "./UpdateEventForm";

const UserAdmin = () => {
  const [newEvent, setNewEvent] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  //here we edit or update the data in event
  const [editingEvent, setEditingEvent] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const events = useSelector((state) => state.event.events);

  // Add Event
  const handleAddEvent = () => {
    if (
      !newEvent.trim() ||
      !newDescription.trim() ||
      !location.trim() ||
      !date.trim()
    ) {
      toast.warn("Fill all fields");
      return;
    }

    const event = {
      id: Date.now(),
      name: newEvent,
      description: newDescription,
      location,
      date,
    };

    dispatch(addEvent(event));

    setNewEvent("");
    setNewDescription("");
    setLocation("");
    setDate("");

    toast.success("Event Added Successfully!");
  };

  // Delete event
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    toast.info("Event Deleted!");
  };

  return (
    <div className="min-h-screen bg-indigo-200 flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-6">Admin Dashboard</h2>

      {/* If editing then it show Update Form */}
      {editingEvent && (
        <UpdateEventForm
          event={editingEvent}
          closeForm={() => setEditingEvent(null)}
        />
      )}

      {/* Add Event Form */}
      {!editingEvent && (
        <div className="bg-white p-6 rounded shadow-md w-[400px] mb-6 text-left">
          <label>Event Name:</label>
          <input
            type="text"
            placeholder="Enter event name"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <label>Description:</label>
          <textarea
            placeholder="Enter description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <button
            onClick={handleAddEvent}
            className="bg-sky-500 text-white w-full py-2 rounded mt-3 hover:bg-sky-600"
          >
            Add Event
          </button>
        </div>
      )}

      {/* All Events Table */}
      <div className="bg-gray-300 p-6 rounded shadow-md w-[800px]">
        <h3 className="text-xl font-semibold mb-3">All Events</h3>

        {events.length === 0 ? (
          <p className="text-center">No events added yet.</p>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{event.name}</span>
              <span>{event.description}</span>
              <span>{event.date}</span>
              <span>{event.location}</span>

              <button
                onClick={() => handleDelete(event.id)}
                className="text-red-600 font-semibold"
              >
                Delete
              </button>

              <button
                onClick={() => setEditingEvent(event)}
                className="text-blue-600 font-semibold"
              >
                Update
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Logout
      </button>

      <button
        onClick={() => navigate("/user-booking")}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        User-Bookings
      </button>
    </div>
  );
};

export default UserAdmin;
