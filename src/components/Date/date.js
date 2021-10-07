export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export const today = new Date();
  export const  date =
      days[today.getDay()] +
      "," +
      today.getDate() +
      " " +
      months[today.getMonth()] +
      "," +
      today.getHours() +
      ":" +
      today.getMinutes() +
      "," +
      today.getFullYear();