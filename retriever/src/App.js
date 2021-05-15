import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import MainPage from './Pages/MainPage';
import Profile from './Pages/Profile';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path = '/'>
                <Home/>
            </Route>
            <Route path='/login'>
                <LogIn/>
            </Route>
            <Route path='/signup'>
                <SignUp/>
            </Route>
            <Route path='/main-page'>
                <MainPage/>
            </Route>
            <Route path='/profile'>
                <Profile/>
            </Route>
            <Route path='/*'>
                <Error/>
            </Route>
        </Switch>
    </Router>       
  );
}

export default App;
