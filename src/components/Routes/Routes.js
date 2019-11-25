import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { searchPage } from "../Pages/SearchPage/searchPage";
import { NotFound } from "../NotFound/notFound";
import result from "../Pages/Result/result";
export const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={searchPage} />
        <Route path="/searchPage" component={searchPage} />
        <Route path="/result/:id" component={result} />
        }/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default Routes(Routes);
