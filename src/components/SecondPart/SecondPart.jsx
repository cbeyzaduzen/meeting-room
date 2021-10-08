import React, { Component } from "react";
import "./SecondPart.css";
import { Popup, FirstPartOpen, FirstPartBusy } from "../index";
import { today, date } from "../Date/date";
import CloseIcon from "@mui/icons-material/Close";
import StateConsumer from "../../context";
import { IconButton, ListItem, List ,ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const newTime = today.getFullYear() + today.getMonth() + today.getDay();
const meetingStartDate = document.Start;
const meetingEndDate = document.End;
const open = meetingStartDate < newTime && meetingEndDate > newTime;

export default class SecondPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: JSON.parse(localStorage.getItem("document")) || [],
      date: date,
      newTime: newTime,
      open: open,
    };
  }

   generate=(element)=>{
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  render() {
    return (
      <StateConsumer>
        {(value) => {
          const { open } = this.state;
          const { randevu, removeFromUI } = value;
          return (
            <div className="main">
              {open ? <FirstPartOpen /> : <FirstPartBusy />}

              <div className="secondPart">
                <div className="currentDate">{this.state.date}</div>
                <div className="meetings">
                  <h1 className="header">Upcoming Meetings</h1>
                  {randevu.length > 0 ? (
                    <List>
                    {
                      randevu.map((document, inx) => {
                        return (
                          <ListItem className="list-items" key={inx}>
                            <ListItemText
                              primary={document.Title}
                              secondary={`(${document.Start})   (${document.End})`}
                            />
                            <IconButton edge="end">
                              <DeleteIcon
                                onClick={() => {
                                  removeFromUI(document.ID);
                                }}
                              ></DeleteIcon>
                            </IconButton>
                          </ListItem>
                        )
                    })
                    }
                    </List>
                  ) : (
                    <span>herhangi bir veri bulunamadı</span>
                  )}
                </div>

                <Popup  newTime={newTime} data={this.state.documents}/>
              </div>
            </div>
          );
        }}
      </StateConsumer>
    );
  }
}
