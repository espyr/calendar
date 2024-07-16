import React, { useState, ChangeEvent, FormEvent } from "react";
import { CalendarEvent } from "../types";

type AddEventProps = {
  dayClicked: string | null;
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>;
  onClose: () => void;
};

const AddEvent: React.FC<AddEventProps> = (props) => {
  const [event, setEvent] = useState<CalendarEvent>({
    type: "startPer",
    description: "",
    date: props.dayClicked,
    time: "00:00",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.setEvents((prevState) => {
      console.log("event", event);
      return [...prevState, event];
    });
    props.onClose();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    attribute: string
  ) => {
    setEvent({ ...event, [attribute]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 text-center border-none">
      <h2 className="text-2xl ">Add Event</h2>
      <form
        id="eventForm"
        className="flex gap-5 flex-col border-none focus:border-none"
      >
        <input
          id="eventTitleInput"
          className="h-10 p-2 outline-none"
          placeholder="Description"
          onChange={(e) => handleChange(e, "description")}
        />
        <div className="flex gap-3 text-center items-center">
          <label htmlFor="event" className="flex text-center">
            Choose event:
          </label>
          <select
            id="event"
            className="h-10 p-2"

            name="event"
            style={{ padding: "5px", outline: "none" }}
            onChange={(e) => handleChange(e, "type")}
          >
            <option value="startPer">Period Start</option>
            <option value="endPer">Period End</option>
            <option value="incident">Incident</option>
            <option value="medicalAppointment">Medical Appointment</option>
            <option value="gym">Gym</option>
            <option value="drink">Drink</option>
            <option value="coffee">Coffee</option>
            <option value="work">Work</option>
            <option value="coding">Coding</option>

          </select>
          <input
            className="h-10 p-2  outline-none"
            type="time"
            id="time"
            name="time"
            onChange={(e) => handleChange(e, "time")}
          />
        </div>
      </form>
      <div className="flex justify-between px-8 pt-5">
        <button
          className="bg-red p-3 rounded-md text-white text-lg"
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button
          className="bg-green p-3 rounded-md text-white text-lg"
          onClick={submitHandler}
          id="saveButton"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
