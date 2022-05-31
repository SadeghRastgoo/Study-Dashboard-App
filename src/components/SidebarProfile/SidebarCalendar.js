import React, { useState } from "react";
import Calendar from "react-calendar";

const SidebarCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container animate__animated animate__fadeIn ">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default SidebarCalendar;
