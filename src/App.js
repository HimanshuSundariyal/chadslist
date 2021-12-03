import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import AppLayout from './layouts/AppLayout';

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "homepage" */ "./pages/home")
);
const ChadList = React.lazy(() =>
  import(/* webpackChunkName: "homepage" */ "./pages/chad-list")
);

const MyChadList = React.lazy(() =>
  import(/* webpackChunkName: "homepage" */ "./pages/my-chads")
);


class App extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <AppLayout>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <HomePage {...props} />}
                />
                <Route
                  path="/list"
                  exact
                  render={(props) => <ChadList {...props} />}
                />
                  <Route
                  path="/my-chads"
                  exact
                  render={(props) => <MyChadList {...props} />}
                />
              </Switch>
            </AppLayout>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
