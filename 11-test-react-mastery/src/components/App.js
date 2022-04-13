import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "../css/App.css";
import { LIMIT_MSG, INITIAL_SEARCH_TERM } from "./config";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, loadingMsg: "Loading..." };

  //Initial Search Results - Display on the website upon loading
  componentDidMount() {
    this.onTermSubmit(INITIAL_SEARCH_TERM);
  }

  //Async function to fetch data from youtube API
  onTermSubmit = async (term) => {
    try {
      const res = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      //Put the search results fetched from youtube API to state, then set the first video as selected video
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0],
      });
    } catch (err) {
      this.setState({
        loadingMsg: LIMIT_MSG,
      });
    }
  };

  //Set video selected from the right list to active video
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  //Render components
  render() {
    return (
      <div className="ui container">
        <SearchBar onEnter={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail
                video={this.state.selectedVideo}
                loadingMsg={this.state.loadingMsg}
              />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
