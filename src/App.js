import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import Quiz from './components/Quiz';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const [quizzes, setQuizzes] = useState([]);

  const handleAddQuiz = (quizData) => {
    setQuizzes([...quizzes, quizData]);
  };

  const handleDeleteQuiz = (id) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main quizzes={quizzes} onDelete={handleDeleteQuiz} />} />
        <Route path="/add-quiz" element={<QuizApp onSubmit={handleAddQuiz} />} />
        <Route path="/quiz/:id" element={<Quiz quizzes={quizzes} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
