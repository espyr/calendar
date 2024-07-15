import React, { useState, ChangeEvent, FormEvent } from "react";

type Event = {
  type: string;
  description: string;
  date: string | null;
  time: string;
};

type AddEventProps = {
  dayClicked: string | null;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  onClose: () => void;
};

const AddEvent: React.FC<AddEventProps> = (props) => {
  const [event, setEvent] = useState<Event>({
    type: "startPer",
    description: "",
    date: props.dayClicked,
    time: "00:00",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.setEvents((prevState) => {
      console.log("rwrwr", event);
      return [...prevState, event];
    });
    props.onClose();
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, description: e.target.value });
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEvent({ ...event, type: e.target.value });
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, time: e.target.value });
  };

  return (
    <div className="addEventModal">
      <h2>Add Event</h2>
      <form id="eventForm">
        <input
          id="eventTitleInput"
          placeholder="Description"
          required
          onChange={handleDescriptionChange}
        />
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            gap: "5px",
            paddingBottom: "15px",
          }}
        >
          <label htmlFor="event">Choose event:</label>
          <select
            id="event"
            name="event"
            style={{ padding: "5px", outline: "none" }}
            onChange={handleTypeChange}
          >
            <option value="startPer">Period Start</option>
            <option value="endPer">Period End</option>
            <option value="incident">Incident</option>
            <option value="event">Event</option>
          </select>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleTimeChange}
          />
        </div>
      </form>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <button id="cancelButton" onClick={props.onClose}>
          Cancel
        </button>
        <button onClick={submitHandler} id="saveButton">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
