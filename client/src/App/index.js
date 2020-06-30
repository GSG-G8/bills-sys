import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Spinner, Header } from '../components';
import { Current, Home, Login, PastBills, Profile } from '../pages';
import { useAuth } from '../hooks';

const Loader = () => <Spinner className="w-8 h-8 m-auto spin mt-64" />;

const App = () => {
  const { logged, setLogged, setUserId } = useAuth();

  if (logged === 'loading') return <Loader />;
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {!logged && (
              <>
                <Header />
                <Route>
                  <Login setLogged={setLogged} setId={setUserId} />
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
      </Suspense>
    </div>
  );
};

export default App;
