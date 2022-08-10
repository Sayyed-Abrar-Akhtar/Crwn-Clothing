import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { selectCurrentUser } from './redux/user/user.selectors';

import CheckoutPage from './components/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   // const { checkUserSession } = this.props;
  //   checkUserSession();

  //   //const { setCurrentUser } = this.props;
  //   //auth.onAuthStateChanged return a function that is assigned to "unsubscribeFromAuth" properties of the class which is initially null
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);
  //   //     onSnapshot(userRef, (snapshot) => {
  //   //       setCurrentUser({ id: snapshot.id, ...snapshot.data() });
  //   //     });
  //   //   } else {
  //   //     setCurrentUser(userAuth);
  //   //   }
  //   // });
  // }

  // componentWillUnmount() {
  //   // when the function that was returned earlier is called will unsubscribe
  //   // so this way it prevents memory leaks
  //   // this.unsubscribeFromAuth();
  // }

  // render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />

        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
  // }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
