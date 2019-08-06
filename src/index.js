import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/home";

import About from "./pages/about";
import Message from "./pages/message";
import Picts from "./pages/picts";

import mockData from "./mockData";
import UserProfile from "./userProfile";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: mockData
    };
  }
  renderUsers = () => {
    return this.state.users.map(user => {
      return <UserProfile user={user} />;
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="navbar-wrapper">
            <div className="logo">desc. logo</div>
            <Navbar />

            <div className="userName">
              <div className="login">Login</div>
              <button className="btn">USER NAME</button>
              <button className="btn">PASSWORD</button>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/picts" component={Picts} />
            <Route path="/about" component={About} />
            <Route path="/message" component={Message} />
          </Switch>
        </BrowserRouter>
        <div className="user-wrapper">{this.renderUsers()}</div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
