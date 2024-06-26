import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ day, currentMonth, clickOnDay }) => {
  return (
    <>
      <CalendarItem
        allDay={day}
        currentMonth={currentMonth}
        clickOnDay={clickOnDay}
      />
    </>
  );
};

export default Calendar;
