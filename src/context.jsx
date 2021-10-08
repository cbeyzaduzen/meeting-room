import React, { Component } from "react";

const StateContext = React.createContext();

export class ContextProvider extends Component {
  state = { randevu: JSON.parse(localStorage.getItem("document")) || [] };

  removeFromUI = (id) => {
    let newData = this.state.randevu.filter((item) => item.ID !== id);
    this.setState({ randevu: newData });
    localStorage.setItem("document", JSON.stringify(newData));
  };

  addFromUI = (item) => {
    this.setState({ randevu: [...this.state.randevu, item] }, () => {
      localStorage.setItem("document", JSON.stringify(this.state.randevu));
    });
  };

  render() {
    return (
      <div>
        <StateContext.Provider
          value={{
            ...this.state,
            removeFromUI: this.removeFromUI,
            addFromUI: this.addFromUI,
          }}
        >
          {this.props.children}
        </StateContext.Provider>
      </div>
    );
  }
}

const StateConsumer = StateContext.Consumer;

export default StateConsumer;
