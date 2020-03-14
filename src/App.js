import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import API from "./API/Api";
import Darksky from "./API/Darksky";
import "./App.css";

class App extends Component {
  state = {
    summary: "",
    temperature: null,
    placeName: ""
  };

  searching = async place => {
    const temp1 = await API.get(
      `/${place}.json?access_token=pk.eyJ1Ijoid2FsZWVkLXJhZmkiLCJhIjoiY2szYmp2N3Z1MG13YTNjcXRqeWs4bXIyayJ9.eYIMfF39cDG3Mz_fW0Iccg`
    );
    this.setState({
      placeName: temp1.data.features[0].place_name
    });
    let latitude = temp1.data.features[0].center[1];
    let longitude = temp1.data.features[0].center[0];
    const temp2 = await Darksky.get(`/${latitude},${longitude}?units=si`);
    this.setState({
      summary: temp2.data.currently.summary,
      temperature: temp2.data.currently.temperature
    });
    console.log(temp2.data);
  };
  //use this url before your api url    https://cors-anywhere.herokuapp.com/ as a base url

  render() {
    let weather = null;
    if (
      this.state.temperature != null &&
      this.state.summary != "" &&
      this.state.placeName != ""
    ) {
      weather = (
        <div align="center">
          <br />
          <h2>Place: {this.state.placeName}</h2>
          <h2>Temperature: {this.state.temperature}°C</h2>
          <h2>Summary: {this.state.summary}</h2>
        </div>
      );
    }
    return (
      <Router>
        <div>
          <Header searching={this.searching} />{" "}
          <Route
            exact
            path="/"
            render={props => <React.Fragment>{weather}</React.Fragment>}
          />{" "}
          <Route path="/about" component={About} />{" "}
        </div>{" "}
      </Router>
    );
  }
}

export default App;
