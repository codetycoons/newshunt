import React, { Component } from "react";
import Layout from "../Layout/Layout";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route
              path="/description"
              exact
              render={(props) => {
                console.log("locatin", props);
                return <h1>{props.location.state.description}</h1>;
              }}
            />
            <Route
              render={() => {
                return <h1>page not found..</h1>;
              }}
            />
          </Switch>
          {/* <Redirect from="*" to="/404" /> */}
        </Router>
        ;{/* <Layout /> */}
      </React.Fragment>
    );
  }
}

export default App;
