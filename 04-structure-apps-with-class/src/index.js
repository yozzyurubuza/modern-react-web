import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); //Important to always initialize props in super
    //Initialize State
    //THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //To update state object, always use 'setState' only
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;

    // return <div>Latitude: {this.state.lat || this.state.errorMessage}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
