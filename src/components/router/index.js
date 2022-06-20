import React from 'react';
import Contact from '../contact';
import App from '../main/App.js';
import { Routes, Route, Link } from "react-router-dom";


class Router extends React.Component{
  render()
  {
    return (
      <>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
}

export default Router;
