import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Header } from '../components';
import { Current, Home, Login, PastBills, Profile } from '../pages';

const App = () => {
  const [logged, setLogged] = useState(() => false);
  return (
    <div>
      <Router>
        <Switch>
          {!logged && (
            <>
              <Header />
              <Route>
                <Login auth={setLogged} />
              </Route>
            </>
          )}
          <Layout>
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
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
