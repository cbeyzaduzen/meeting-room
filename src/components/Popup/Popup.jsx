import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuidv4 } from "uuid";
import "./Popup.css";
import StateConsumer from "../../context";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    const values = new Date().toLocaleDateString();
    this.state = {
      // end:new Date().toLocaleDateString()
      values: values,
    };
  }

  handleClickOpen = (e) => {
    this.setState({
      open: true,
    });
  };

  handleClose = (e) => {
    this.setState({
      open: false,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e, addFromUI) => {
    const { end, title, start } = this.state;
    const item = { ID: uuidv4(), Title: title, Start: start, End: end };

    if (title == "" || title == undefined || title == null) {
      return alert("title alanı boş geçilemez");
    }

    if (end == "" || end == undefined || end == null) {
      return alert("tarih alanı boş geçilemez");
    }

    if (start == "" || start == undefined || start == null) {
      return alert("tarih alanı boş geçilemez");
    }
    addFromUI(item);
    this.setState({ open: false });

    e.preventDefault();
  };

  render() {
    return (
      <StateConsumer>
        {(value) => {
          const { randevu, addFromUI } = value;

          return (
            <div>
              <Button variant="outlined" onClick={this.handleClickOpen}>
                Add
              </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Meeting Info</DialogTitle>
                <DialogContent>
                  <DialogContentText>add</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    id="start"
                    type="date"
                    fullWidth
                    variant="standard"
                    name="start"
                    value={this.state.start}
                    onChange={this.handleChange}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    id="end"
                    type="date"
                    fullWidth
                    variant="standard"
                    name="end"
                    value={this.state.end}
                    defaultValue={this.state.values}
                    onChange={this.handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose}>Cancel</Button>
                  <Button
                    onClick={(e) => {
                      this.handleFormSubmit(e, addFromUI);
                    }}
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
        }}
      </StateConsumer>
    );
  }
}
