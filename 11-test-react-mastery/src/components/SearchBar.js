import React from "react";

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
      <div className="search-bar ui segment" style={{ marginTop: 10 }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search Bar</label>
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
