import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/NewBadges";
import Badges from "../pages/Badges";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
import Main from "../components/Main";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailContainer from "../pages/BadgeDetailContainer";

function App() {
  return (
    //BROWSER ROUTER DEBE TENER UN SOLO HIJO QUE ES SWITCH
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
