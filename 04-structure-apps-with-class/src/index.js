import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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

  //Helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;

    // return <div>Latitude: {this.state.lat || this.state.errorMessage}</div>;
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
