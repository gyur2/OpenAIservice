import React from 'react';
import { useNavigate } from 'react-router-dom';
import './default.css';

const Main = ({ quizzes, onDelete }) => {
    const navigate = useNavigate();

    const handleAddQuiz = () => {
        navigate('/add-quiz');
    };

    const handleQuizClick = (id) => {
        navigate(`/quiz/${id}`);
    };

    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <div className="main-container">
            <h1>My Quiz</h1>
            <button className="add-quiz-button" onClick={handleAddQuiz}>Add Quiz</button>
            <div className="quiz-list">
                {quizzes.map((quiz, index) => (
                    <div key={index} className="quiz-item">
                        <span className="quiz-topic" onClick={() => handleQuizClick(quiz.id)}>{quiz.topic}</span>
                        <button className="delete-button" onClick={() => handleDelete(quiz.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
