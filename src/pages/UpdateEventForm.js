import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateEvent } from "../redux/slices/EventSlices";

const UpdateEventForm = ({ event, closeForm }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(event.name);
  const [description, setDescription] = useState(event.description);
  const [location, setLocation] = useState(event.location);
  const [date, setDate] = useState(event.date);

  //function for update event
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("data update");

    dispatch(
      UpdateEvent({
        id: event.id,
        name,
        description,
        location,
        date,
      })
    );

    closeForm();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Update Event</h3>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={name}
          placeholder="Event name"
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
        />

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
        />

        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Update Event
        </button>
      </form>

      <button
        onClick={closeForm}
        className="w-full mt-3 bg-gray-300 p-2 rounded-md hover:bg-gray-400"
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateEventForm;
