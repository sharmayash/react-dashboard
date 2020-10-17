import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NotFound from "../components/common/404";
import Search from "../components/pages/Search";
import Dashboard from "../components/pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/search" component={Search} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
