import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ day, currentMonth }) => {
  return (
    <>
      <CalendarItem allDay={day} currentMonth={currentMonth} />
    </>
  );
};

export default Calendar;
