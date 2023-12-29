import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import Quiz from './Components/Quiz/QuizPage';
import Links from './Components/Links/LinksPage';
import Suggestions from './Components/Suggestions/SuggestionsPage';
import './app.css';

function App() {
  return (
    <div className="theApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/links" element={<Links />} />
        {/* <Route path="/control" element={<Control />} /> */}
      </Routes>
    </div>
  );
}

export default App;
