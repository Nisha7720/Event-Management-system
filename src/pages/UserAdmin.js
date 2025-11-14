import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent, UpdateEvent } from "../redux/slices/EventSlices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//console.log("heloo");

const UserAdmin = () => {
  const [newEvent, setNewEvent] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [location , setLocation] = useState("");
  const [ date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.event?.events);

  //console.log("Events in Admin:",events);
  // Add new event
  const handleAddEvent = () => {
    if (!newEvent?.trim()) {
      toast.warn("Please enter an event name!");
      return;
    }
    if(!newDescription?.trim() || !location?.trim() || !date?.trim()){
      toast.warn("Please fill in all fields!");
      return;
    }

    //console.log("Adding Event:");

    const event = {
     id: Date.now(),
     name: newEvent,
     description: newDescription,
     location : location,
     date: date,
    };
    //console.log("Event to be added:", event);

    dispatch(addEvent(event));
    // after diaptach the event clear the input field
    setNewEvent("");
    setNewDescription("");
    setLocation("");
    setDate("");
    //after the complete we can show toast pop off
    toast.success("Event added successfully!");
  };

  // Delete event
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    toast.info("Event deleted!");
  };

  //update the event
  const handleUpdate = (id) => {
    dispatch(UpdateEvent(id));
    toast.info("updating Going on !!");
  }

  return (
    <div className="min-h-screen bg-indigo-200 flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-6">Admin Dashboard</h2>

      <div className="bg-white p-6 rounded shadow-md w-[400px] mb-6 text-left">
        <label className="text-left">Event Name:</label>
        <input
          type="text"
          placeholder="Enter new event name"
          value={newEvent??""}
          onChange={(e) => setNewEvent(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />
        <label>Description:</label>
        <textarea
          type="text"
          placeholder="Enter new event description"
          value={newDescription??""}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <label>Location:</label>
        <input
          type="location"
          placeholder="enter your location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

         <label>Date:</label>
         <input
           type="date"
           placeholder="YYYY-MM-DD"
           onChange={(e) => setDate(e.target.value)}
           className="w-full border px-3 py-2 rounded mb-3"
         />

        <button
          onClick={handleAddEvent}
          className="bg-sky-500 text-white w-full py-2 rounded mt-3 hover:bg-sky-600 cursor-pointer"
        >
          Add Event
        </button>
      </div>

      <div className="bg-gray-300 p-6 rounded shadow-md w-[800px] h-[400px] ">
        <h3 className="text-xl font-semibold mb-3">All Events</h3>
        {events?.length === 0 ? (
          <p className="text-gray-500 text-sm">No events added yet.</p>
        ) : (
          events?.map((event) => (
            <div
              key={event?.id}
              className="flex justify-between items-center border-b py-2 text-left"
            >
              <span>{event?.name}</span>
              <span>{event?.description}</span>
              <span>{event?.date}</span>
              <span>{event?.location}</span>

              {/* delete the events */}
              <button
                onClick={() => handleDelete(event.id)}
                className="text-red-700 hover:underline font-semibold "
              >
                Delete
              </button>
              {/* update the event */}
              <button
              onClick={() => handleUpdate(event.id)}
              className="text-sky-700 hover:underline font-semibold">
                Update
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
