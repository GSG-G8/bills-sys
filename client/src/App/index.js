import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header, Layout, Loader } from '../components';
import { useAuth } from '../hooks';
import { Current, Home, Login, PastBills, Profile, Bills } from '../pages';
import { DataContext } from '../context';
import useUserData from '../hooks/useUserData';

const App = () => {
  const { logged, setLogged, setUserId } = useAuth();
  const { t } = useTranslation();
  const userData = useUserData();
  if (logged === 'loading') return <Loader />;
  return (
    <div dir={t('direction')} className="pb-24 md:pb-0">
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
            <DataContext.Provider value={userData}>
              <Route path="/current/:billType">
                <Current />
              </Route>
              <Route path="(/|/home)">
                <Home />
              </Route>
              <Route exact path="/past-bills/:billType">
                <PastBills />
              </Route>
              <Route exact path="/past-bills">
                <Bills />
              </Route>
              <Route path="/profile">
                <Profile setLogged={setLogged} setUserId={setUserId} />
              </Route>
            </DataContext.Provider>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
