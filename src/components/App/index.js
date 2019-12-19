import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import * as ROUTES from '../../constants/routes';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import ForumPage from '../Forum';
import HomePage from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordForgetPage from '../PasswordForget';
import ResourcesPage, {
  CategoryPage, ResourcePage, NewResourcePage, NewCategoryPage,
} from '../Resources';
import { withAuthentication, AuthUserContext } from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import UsersPage from '../Users';


function App() {
  const { authLoading } = useContext(AuthUserContext);
  return (
    <Router>
      <div>
        <ClipLoader loading={authLoading} />
        {!authLoading && (
          <Navigation />
        )}

        <hr />

        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route exact path={ROUTES.FORUM} component={ForumPage} />
          <Route exact path={ROUTES.USERS} component={UsersPage} />

          {/* Resources */}
          <Route exact path={ROUTES.RESOURCE_CATEGORIES}>
            <ResourcesPage />
          </Route>
          <Route exact path="/resources/new">
            <NewCategoryPage />
          </Route>
          <Route exact path="/resources/:categoryURLId">
            <CategoryPage />
          </Route>
          <Route exact path="/resources/:categoryURLId/new">
            <NewResourcePage />
          </Route>
          <Route exact path="/resources/:categoryURLId/:resourceURLId">
            <ResourcePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
