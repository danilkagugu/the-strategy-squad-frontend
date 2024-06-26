import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ day, onDayClick }) => {
  const handleDayClick = (day) => {
    onDayClick(day);
  };
  return <CalendarItem allDay={day} onClickHandler={handleDayClick} />;
};

export default Calendar;
