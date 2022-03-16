import React from "react";
import axios from "axios"; //Put import of 3rd-party libraries above components
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 3v4g1r6C3nwy6_odUNZJXLeIcwK-4YGQ0uXBiRZm2u0",
      },
    });
    // Other approach to get data
    //   .then((res) => {
    //     console.log(res.data.results);
    //   });

    console.log(res.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onEnter={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
