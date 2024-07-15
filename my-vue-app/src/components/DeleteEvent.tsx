
import React from 'react';
import { CalendarEvent } from '../types';

interface DeleteEventProps {
    onClose: () => void;
    setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>
}

const DeleteEvent: React.FC<DeleteEventProps> = (props) => {
  return (
    <div id="deleteEventModal">
      <h2>Event</h2>
      <p id="eventText"></p>
      <button id="deleteButton">Delete</button>
      <button id="closeButton" onClick={props.onClose}>
        Close
      </button>
    </div>
  );
};

export default DeleteEvent;