import React, { Component } from "react";
import ReactCircleModal from "react-circle-modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Popup.css";
import { TextField, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";


export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randevu: [],
    };
  }

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

  // componentDidMount() {
  //   const documentData = localStorage.getItem("document") || [];
  //   this.setState({
  //     randevu: documentData,
  //   });
  // }

  render() {
    const { randevu } = this.state;
    return (
      <ReactCircleModal
        className="circle-modal"
        backgroundColor="#E0F1F0"
        toogleComponent={(onClick) => (
          <div className="addIcon">
            <AddCircleIcon onClick={onClick}></AddCircleIcon>
          </div>
        )}
      >
        {(onClick) => (
          <>
            <Grid item xs={12}>
              <form>
                <div className="form-group-title">
                  <label className="title">Title</label>
                  <TextField
                    name="title"
                    className="title_"
                    value={this.state.title}
                    onChange={this.handleChange}
                    focused
                  />
                </div>

                <div className="form-group-start">
                  <label className="start-title">Meeting Start</label>
                  <TextField
                    type="date"
                    sx={{ width: 250 }}
                    name="start"
                    value={this.state.start}
                    onChange={this.handleChangeStartDate}
                  />
                </div>

                <div className="form-group-end">
                  <label className="end-title">Meeting End</label>
                  <TextField
                    type="date"
                    sx={{ width: 250 }}
                    name="end"
                    value={this.state.end}
                    onChange={this.handleChangeEndDate}
                  />
                </div>
              </form>
            </Grid>

            <Grid item xs>
              <button
                className="closeButton btn btn-primary btn-block"
                onClick={onClick}
              >
                Close
              </button>

              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="addButton btn btn-primary btn-block"
              >
                Add
              </button>
            </Grid>
          </>
        )}
      </ReactCircleModal>
    );
  }
}
