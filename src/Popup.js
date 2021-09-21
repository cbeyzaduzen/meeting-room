import React, { useState } from "react";
import ReactCircleModal from "react-circle-modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Popup.css";

const Popup = () => {
  const [title, setTitle] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const handle = () => {
    localStorage.setItem("Title", title);
    localStorage.setItem("Start", start);
    localStorage.setItem("End", end);
  };

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
        <form>
          <div className="form-group-title">
            <label className="title">Title</label>
            <input
              type="text"
              name="title"
              className="title_"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group-start">
            <label className="start-title">Meeting Start</label>
            <input
              type="datetime-local"
              name="start"
              className="startDate"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>

          <div className="form-group-end">
            <label className="end-title">Meeting End</label>
            <input
              type="datetime-local"
              name="end"
              className="endDate"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>

          <button
            onClick={handle}
            type="submit"
            className="addButton btn btn-primary btn-block"
          >
            Add
          </button>

          <button
            className="closeButton  btn btn-primary btn-block"
            onClick={onClick}
          >
            Close
          </button>
        </form>
      )}
    </ReactCircleModal>
  );
};
export default Popup;
