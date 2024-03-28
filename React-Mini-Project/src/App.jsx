import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Workouts from './components/Workouts';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import './index.css';


function App () {
  return (
    <>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Workout" element={<Workouts />} />
        <Route path="/Blog" element={<Blog />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
