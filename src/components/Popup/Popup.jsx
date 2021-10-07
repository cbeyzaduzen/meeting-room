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

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randevu: [],
      
    };
  }
  // const [open, setOpen] = React.useState(false);

  handleClickOpen = (e) => {
    this.setState({
      open:true
    })
    // setOpen(true);
  };

  handleClose = (e) => {
    this.setState({
      open:false
    })
    // setOpen(false);
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeEndDate = (e) => {
    this.setState({
      end: e.target.value,
    });
  };

  handleChangeStartDate = (e) => {
    this.setState({
      start: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    const { end, title, start } = this.state;
    const item = { ID: uuidv4(), Title: title, Start: start, End: end };

    this.setState({ randevu: [...this.state.randevu, item] }, () => {
      localStorage.setItem("document", JSON.stringify(this.state.randevu));
    });

    e.preventDefault();
  };


  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>Add</Button>
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
              value={this.state.title}
              onChange={this.handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="start"
              label="Start"
              type="date"
              fullWidth
              variant="standard"
              name="start"
              value={this.state.start}
              onChange={this.handleChangeStartDate}
            />

            <TextField
              autoFocus
              margin="dense"
              id="end"
              label="End"
              type="date"
              fullWidth
              variant="standard"
              value={this.state.end}
              onChange={this.handleChangeEndDate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleFormSubmit}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
