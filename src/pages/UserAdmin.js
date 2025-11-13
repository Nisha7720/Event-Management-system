import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../redux/slices/EventSlices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

console.log("heloo");

const UserAdmin = () => {
  const [newEvent, setNewEvent] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state?.event.events);

  //console.log("Events in Admin:",events);
  // Add new event
  const handleAddEvent = () => {
    if (!newEvent?.trim()) {
      toast.warn("Please enter an event name!");
      return;
    }
    console.log("Adding Event:");
    const event = {
     id: Date.now(),
     name: newEvent,
     description: newDescription,
     date: new Date().toLocaleDateString(),
    };
    //console.log("Event to be added:", event);

    dispatch(addEvent(event));
    // after diaptach the event clear the input field
    setNewEvent("");
    setNewDescription("");
    //after the complete we can show toast pop off
    toast.success("Event added successfully!");
  };

  // Delete event
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    toast.info("Event deleted!");
  };

  return (
    <div className="min-h-screen bg-indigo-200 flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-6">Admin Dashboard</h2>

      <div className="bg-white p-6 rounded shadow-md w-[400px] mb-6">
        <input
          type="text"
          placeholder="Enter new event name"
          value={newEvent??""}
          onChange={(e) => setNewEvent(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <input
          type="text"
          placeholder="Enter new event description"
          value={newDescription??""}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />
        <button
          onClick={handleAddEvent}
          className="bg-sky-500 text-white w-full py-2 rounded mt-3 hover:bg-sky-600 cursor-pointer"
        >
          Add Event
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md w-[400px]">
        <h3 className="text-xl font-semibold mb-3">All Events</h3>
        {events?.length === 0 ? (
          <p className="text-gray-500 text-sm">No events added yet.</p>
        ) : (
          events?.map((event) => (
            <div
              key={event?.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{event?.name}</span>
              <button
                onClick={() => handleDelete(event.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-400 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default UserAdmin;
