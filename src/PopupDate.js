import React, { useState } from "react";
import DatePicker from "react-date-picker";

function PopupDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)}
     />
  );
}

export default PopupDate;
