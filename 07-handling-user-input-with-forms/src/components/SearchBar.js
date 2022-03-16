import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Ways to fix 'this' keyword
  //1. Use constructor
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  //2. Transform into arrow function
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onEnter(this.state.term);
  };

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.term);
  // }

  render() {
    return (
      <div className="ui segment">
        {/* 3. Transform into Arrow Function */}
        {/* <form onSubmit={()=>this.onFormSubmit(e)} className="ui form"></form> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
