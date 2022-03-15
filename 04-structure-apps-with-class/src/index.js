import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //   constructor(props) {
  //     super(props); //Important to always initialize props in super
  //     //Initialize State
  //     //THIS IS THE ONLY TIME we do direct assignment to this.state
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  //Alternate State Initialization
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //To update state object, always use 'setState' only
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //   componentDidUpdate() {
  //     console.log("My component was just updated - it rerendered!");
  //   }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;

    // return <div>Latitude: {this.state.lat || this.state.errorMessage}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
