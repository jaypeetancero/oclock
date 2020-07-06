import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { nonAuthenticatedRoutes, authenticatedRoutes } from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateData } from "./interfaces/reducer";

function App() {
  const isAuthenticated: boolean = useSelector(
    (state: StateData) => state.authReducer.isAuthenticated
  );

  let routeComponents;
  if (isAuthenticated) {
    routeComponents = authenticatedRoutes.map(({ path, component }, index) => (
      <Route path={path} component={component} key={index} />
    ));
  } else {
    routeComponents = nonAuthenticatedRoutes.map(
      ({ path, component }, index) => (
        <Route path={path} component={component} key={index} />
      )
    );
  }

  return (
    <div className="position-absolute h-100 w-100">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>{routeComponents}</Switch>
      </Router>
    </div>
  );
}

export default App;
