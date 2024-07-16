import React from "react";
import styles from "./Day.module.css";
import { CalendarDay } from "../types";
import { getIcon } from "./helperFuncs";


type DayProps = {
  item: CalendarDay;
};

const Day: React.FC<DayProps> = ({ item }) => {
  const { key, text, className, onClick, isToday, events } = item;
  // const [showAll, setShowAll] = useState(false);
 
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
