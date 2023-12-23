import './App.css';
import BlogMain from './blog/blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
