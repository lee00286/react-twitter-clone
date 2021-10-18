// React
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// Style
import './App.css';
// Pages
import SignUp from './components/SignUp/HappeningNow';
import SignIn from './components/SignIn/HappeningNow';
import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar/SideBar';

// null   Anyone Can go inside
// true   only logged in user can go inside
// false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="App">
        {/* <SideBar /> */}
        <div>
          <Switch>
            <Route exact path="/" component={Auth(SignUp, false)} />
            <Route exact path="/signin" component={Auth(SignIn, false)} />
            <Route exact path="/feed" component={Auth(Feed, true)} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
}

export default App;