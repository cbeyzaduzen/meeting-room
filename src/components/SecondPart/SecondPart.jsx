import React, { Component } from "react";
import "./SecondPart.css";
import { Popup, FirstPartOpen, FirstPartBusy } from "../index";
import { today, date } from "../Date/date";
import CloseIcon from "@mui/icons-material/Close";

const newTime = today.getFullYear() + today.getMonth() + today.getDay();
const meetingStartDate = document.Start;
const meetingEndDate = document.End;
// const busy = meetingStartDate >= newTime && newTime <= meetingEndDate;
const open = meetingStartDate < newTime && meetingEndDate > newTime;

export default class SecondPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: JSON.parse(localStorage.getItem("document")),
      date: date,
      newTime: newTime,
      open: open,
    };
  }

  removeFromUI = (id) => {
    let newData = this.state.documents.filter((item) => item.ID !== id);
    this.setState({ documents: newData });
    localStorage.setItem("document", JSON.stringify(newData))
  };

  render() {
    const { documents, open } = this.state;
    return (
      <div className="main">
        {open ? <FirstPartOpen /> : <FirstPartBusy />}

        <div className="secondPart">
          <div className="currentDate">{this.state.date}</div>

          <div className="meetings">
            <h1 className="header">Upcoming Meetings</h1>
            <form id="meeting_list">
              <ul className="meetings">
                {documents.map((document, inx) => {
                  return (
                    <li className="list-items" key={inx}>
                      {document.Title},{document.Start},{document.End}
                      <CloseIcon onClick={()=>{this.removeFromUI(document.ID)}}></CloseIcon>
                    </li>
                  );
                })}
              </ul>
            </form>
          </div>

          <Popup/>
        </div>
      </div>
    );
  }
}
