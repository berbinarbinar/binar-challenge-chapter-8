import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Homepage from '../pages/Homepage';
import SignUp from '../pages/SignUp';
import EditPlayer from '../pages/EditPlayer';
import Search from '../pages/Search';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/edit" element={<EditPlayer />}/>
      <Route path="/search" element={<Search />}/>

    </Routes>
  );
}

export default Router;
