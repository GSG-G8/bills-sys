import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Header } from '../components';
import { Current, Home, Login, PastBills, Profile } from '../pages';
import useAuth from '../utils/useAuth';
import AuthContext from '../context';

const App = () => {
  const [logged, setLogged, userId, setUserId] = useAuth();

  if (logged === 'loading') return <div />;
  return (
    <div>
      <Router>
        <AuthContext.Provider
          value={{ auth: { logged, setLogged }, user: { userId, setUserId } }}
        >
          <Switch>
            {!logged && (
              <>
                <Header />
                <Route>
                  <Login />
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
        </AuthContext.Provider>
      </Router>
    </div>
  );
};

export default App;
