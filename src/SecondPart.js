import React, { Component } from "react";
import "./SecondPart.css";
import Popup from "./Popup";
import FirstPartOpen from "./FirstPartOpen";
import FirstPartBusy from "./FirstPartBusy";

export default class SecondPart extends Component {
  constructor() {
    super();

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
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

    var meetingStartDate = localStorage.getItem("Start");
    var meetingEndDate = localStorage.getItem("End");
    var meetingTimeStart = parseInt(
      meetingStartDate.split("T")[1].split(":")[0] * 60 +
        parseInt(meetingStartDate.split("T")[1].split(":")[1])
    );
    var meetingTimeEnd = parseInt(
      meetingEndDate.split("T")[1].split(":")[0] * 60 +
        parseInt(meetingEndDate.split("T")[1].split(":")[1])
    );
    var meetingDayMonth = meetingStartDate.split("T")[0];

    var busy = meetingTimeStart >= newTime && newTime <= meetingTimeEnd;
    var open = meetingTimeStart < newTime && meetingTimeEnd > newTime;

    var today = new Date(),
      date =
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

    var newTime =
      parseInt(today.getHours() * 60) + parseInt(today.getMinutes());

    this.state = {
      date: date,
      newTime: newTime,
      meetingStartDate: meetingStartDate,
      meetingEndDate: meetingEndDate,
      meetingTimeStart: meetingTimeStart,
      meetingTimeEnd: meetingTimeEnd,
      busy: busy,
      open: open,
      meetingDayMonth: meetingDayMonth,
    };
  }

  changeFirstPartColor() {
    if (this.state.open) {
      console.log("open ");
      return <FirstPartOpen />;
    } else if (this.state.busy) {
      console.log("busy ");
      return <FirstPartBusy />;
    }
  }

  render() {
    <div>{this.changeFirstPartColor}</div>
    return (
      <div className="secondPart">
        <div className="currentDate">{this.state.date}</div>

        <div className="meetings">
          <h1 className="header">Upcoming Meetings</h1>
          <form id="meeting_list">
            <ul className="meetings">
              
              <li className="list-items">
                <div className="title-color">
                  {localStorage.getItem("Title")}
                </div>
                <div className="start-color">
                  {this.state.meetingStartDate.split("T")[1]}
                </div>
                ,
                <div className="end-color">
                  {this.state.meetingTimeEnd -
                    this.state.meetingTimeStart +
                    "minutes"}
                  ,{this.state.meetingDayMonth}
                </div>
              </li>
              <hr />
            </ul>
          </form>
        </div>

        <Popup></Popup>
      </div>
    );
  }
}
