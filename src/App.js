import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import Quiz from './Components/QuizItems/QuizPage';
import Resources from './Components/ResourcesPage';



function App() {
  return (
    <div className="theApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
