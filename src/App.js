import './App.css';
import React from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {useEffect} from 'react'

function App() {

  const [{},dispatch] = useStateValue();
  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      // console.log('THE USER IS >>>', authUser);
      if(authUser){
        //user just logged in / 
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [])
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header/>, <Checkout/>]}/>
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/register" element={[<Register/>]}/>

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
