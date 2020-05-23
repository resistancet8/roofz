import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import privateRoutes from "./privateRoutes";

const Homepage = lazy(() => import("../components/Homepage/Homepage.jsx"));
const Properties = lazy(() => import("../components/Properties/Properties.jsx"));
const Login = lazy(() => import("../components/login/Login"));

const Routes = props => (
  <Router>
    <Suspense fallback={<div>...Loading</div>}>
      <Switch>
        {/* PUBLIC ROUTES [START]*/}
        <Route path="/" exact component={Homepage} />
        <Route path="/properties" exact component={Properties} />
        {/* PUBLIC ROUTES [END] */}


        {/* PRIVATE ROUTES */}
        {/* <Route path="/" component={privateRoutes} /> */}
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;