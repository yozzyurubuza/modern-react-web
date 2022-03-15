import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); //Important to always initialize props in super
    //Initialize State
    //THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //To update state object, always use 'setState' only
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitute: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
