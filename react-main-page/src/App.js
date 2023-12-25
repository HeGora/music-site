import React from "react";
import {useState} from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import AppLayout from 'components/AppLayout.js';
import NotReadyPage from 'components/NotReadyPage.js';
import PlaylistPage from 'components/PlaylistPage.js';



function App() {
  return (
    <Routes>
      <Route path = "/" element = {<AppLayout/>}>
        <Route index element = {<NotReadyPage/>}/>
        <Route path = "demo" element = {<PlaylistPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
