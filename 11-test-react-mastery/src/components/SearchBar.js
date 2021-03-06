import React from "react";
import "../css/App.css";

class SearchBar extends React.Component {
  state = { term: "" };

  //Set state into term
  onInputChange = (e) => {
    return this.setState({ term: e.target.value });
  };

  //Trigger search using the keyword typed in the search bar
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onEnter(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              placeholder="Search here..."
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
