import React from "react";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const routeComponents = routes.map(({ path, component }, index) => (
    <Route
      exact={path === "/" ? true : false}
      path={path}
      component={component}
      key={index}
    />
  ));
  return (
    <div className="position-absolute h-100 w-100">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>{routeComponents}</Switch>
      </Router>
    </div>
  );
}

export default App;
