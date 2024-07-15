import React from "react";
import styles from "./Day.module.css";

type Event = {
  type: string;
  description: string;
  date: string;
  time: string;
};

type DayProps = {
  item: {
    key: number;
    text: number;
    className: string;
    onClick: () => void;
    isToday: boolean;
    events: Event[];
  };
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
        <div>
          {text}
          {events && (
            <div className={styles.events}>
              {events.length > 3 ? (
                <div>
                  {events.slice(0, 3).map((event, index) => (
                    <div key={index}>{event.type}</div>
                  ))}
                  <div> ... </div>
                </div>
              ) : (
                events && (
                  <div>
                    {events.map((event, index) => (
                      <div key={index}>{event.type}</div>
                    ))}{" "}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Day;
