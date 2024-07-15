import React, { useEffect, useState } from "react";
// import Modal from "./UI/Modals/Modal";
// import AddEvent from "./UI/Modals/AddEvent";
// import DeleteEvent from "./UI/Modals/DeleteEvent";
import Day from "./Day";
import "../App.css";
import { months, weekdays } from "./staticData";
// import { fetchEvents } from "./util/http";
import Header from "./Header"; // Assuming you have a Header component
import Modal from "./Modal";
import AddEvent from "./AddEvent";

type CalendarProps = {};

const Calendar: React.FC<CalendarProps> = () => {
  const [monthStep, setMonthStep] = useState<number>(0); // Specify number type for monthStep
  const [dayClicked, setDayClicked] = useState<string | null>(null); // Specify string | null for dayClicked
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false); // Specify boolean type for modals
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false); // Specify boolean type for modals
  const [shownMonth, setShownMonth] = useState<number>(new Date().getMonth()); // Specify number type for month
  const [shownYear, setShownYear] = useState<number>(new Date().getFullYear()); // Specify number type for year
  const newDay = new Date();
  const today = `${newDay.getDate()} ${months[newDay.getMonth()]} ${newDay.getFullYear()}`;
  const [currentDate, setCurrentDate] = useState<string>(""); // Specify string type for currentDate
  const [calendarContent, setCalendarContent] = useState<any[]>([]); // Specify type for calendarContent
  // const { data, isPending, isError, error, refetch } = useQuery<any>({ // Specify type for useQuery
  //   queryKey: ["events"],
  //   queryFn: fetchEvents,
  // });
  const [events, setEvents] = useState<any>([]); // Specify type for events

  useEffect(() => {
    console.log(events);
    if (monthStep !== 0) {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const newMonth = currentMonth + monthStep;
      const yearOffset = Math.floor(newMonth / 12); // Number of years to add/subtract
      setShownMonth(newMonth % 12); // Set the month within the current year
      setShownYear(currentYear + yearOffset);
    }

    // Update currentMonth and currentYear
    setCurrentDate(` ${months[shownMonth]} ${shownYear}`);
    loadCalendar();
  }, [monthStep, shownMonth, shownYear, events]); // Include dependencies in useEffect

  const loadCalendar = () => {
    setCalendarContent([]);
    const daysInMonth = new Date(shownYear, shownMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(shownYear, shownMonth, 1).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    // Calculate the starting day of the month (0 for Sunday, 1 for Monday, etc.)
    const paddingDays = weekdays.indexOf(firstDayOfMonth.split(", ")[0]);
    const calendarDays = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const date = `${shownYear}-${shownMonth + 1}-${i - paddingDays}`;
      const daySquare = {
        key: i,
        isToday: isToday(date),
        className: i <= paddingDays ? "paddingDay" : "day",
        onClick: () => i > paddingDays && openModal(date),
        text: i - paddingDays,
        events: [],
      };

      calendarDays.push(daySquare);
    }
    setCalendarContent(calendarDays);
  };

  const isToday = (date: string) => {
    const date1 = new Date(date);
    const date2 = new Date(today);
    return date2.toDateString() === date1.toDateString();
  };

  const openModal = (date: string) => {
    setIsAddModalOpen(true);
    console.log(date);
    setDayClicked(date);
  };

  return (
    <>
      <div id="today">
        <p> {today}</p>
      </div>
      <div id="container">
        <Header currentDate={currentDate} setMonthStep={setMonthStep} />
        {calendarContent && (
          <div className="grid grid-cols-7 gap-1 laptop:mx-24 desktop:mx-52 ">
            {calendarContent.map((item) => (
              <Day key={item.key} item={item} />
            ))}
          </div>
        )}
        {isAddModalOpen && (
          <Modal onHideModal={() => setIsAddModalOpen(false)}>
            <AddEvent setEvents={setEvents} onClose={() => setIsAddModalOpen(false)} dayClicked={dayClicked} />
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal onHideModal={() => setIsDeleteModalOpen(false)}>
            {/* <DeleteEvent setEvents={setEvents} onClose={() => setIsDeleteModalOpen(false)} /> */}
          </Modal>
        )}
      </div>
    </>
  );
};

export default Calendar;
