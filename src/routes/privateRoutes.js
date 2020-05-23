import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

const Test  = () => {
  return <div> Test </div>
}

const AuthenticatedRoutes = props => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" component={Test} />} />
      </Switch>
    </Suspense>
  );
};

export default AuthRoutes(AuthenticatedRoutes);
