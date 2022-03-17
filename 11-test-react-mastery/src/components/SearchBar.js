import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = () => {};

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: 10 }}>
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
