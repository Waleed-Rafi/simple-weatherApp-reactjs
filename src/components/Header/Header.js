import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  searching = e => {
    e.preventDefault();
    this.props.searching(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                placeholder="Enter Place"
                onChange={this.onChange}
                value={this.state.title}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.searching}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
