import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Workouts from './components/Workouts';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';
import './index.css';

//importing the components and the navbar component
//routing for the components using the browser router, route and routes components from react router dom
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
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
