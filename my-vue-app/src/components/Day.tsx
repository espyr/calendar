import React from "react";
import styles from "./Day.module.css";
import { CalendarDay } from "../types";

type DayProps = {
  item: CalendarDay;
};

const Day: React.FC<DayProps> = ({ item }) => {
  const { key, text, className, onClick, isToday, events } = item;
  // const [showAll, setShowAll] = useState(false);
  const getIcon = (type: string) => {
    switch (type) {
      case "startPer":
        return <img className="w-11 h-12" src="../assets/drop.png"></img> // Example icon for start of period
      case "endPer":
        return <span>??</span>; // Example icon for end of period
      case "incident":
        return <span>??</span>; // Example icon for incident
      case "event":
        return <span>??</span>; // Example icon for event
      default:
        return null;
    }
  };
  return (
    <div
      key={key}
      className={`${styles[className]} ${isToday && styles["today"]}`}
      onClick={onClick}
    >
      {className !== "paddingDay" && (
        <div className="text-left">
          {text}
          {events && (
            <div>
              {events.map((event, index) => (
                <div key={index}>{getIcon(event.type)}</div>
              ))}{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Day;
