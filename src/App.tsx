import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import Quiz from './Components/QuizItems/QuizPage';
import Links from './Components/Links/LinksPage';
import './app.css';

function App() {
  return (
    <div className="theApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
