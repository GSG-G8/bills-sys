import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../components';
import { Current, Home, Login, PastBills, Profile } from '../pages';

const App = () => {
  const [logged] = useState(() => false);
  return (
    <div>
      <Suspense fallback={<div />}>
        <Router>
          <Layout>
            <Switch>
              {!logged && (
                <Route>
                  <Login />
                </Route>
              )}
              <Route path="/current">
                <Current />
              </Route>
              <Route path="(/|/home)">
                <Home />
              </Route>
              <Route path="/past-bills">
                <PastBills />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
