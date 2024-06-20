import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './default.css';

const QuizApp = ({ onSubmit }) => {
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [questionCount, setQuestionCount] = useState(1);
    const [questions, setQuestions] = useState([{ num: 1, question: '', solution: '' }]);
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(
            Array.from({ length: questionCount }, (_, i) => ({
                num: i + 1,
                question: questions[i]?.question || '',
                solution: questions[i]?.solution || '',
            }))
        );
    }, [questionCount]);

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleSolutionChange = (index, solution) => {
        const newQuestions = [...questions];
        newQuestions[index].solution = solution;
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const quizData = {
            id: Date.now(),
            topic,
            difficulty,
            questionCount,
            questions,
        };
        onSubmit(quizData);
        navigate('/');
    };

    return (
        <div className="quiz-app-container">
            <h2>Create a New Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Topic:</label>
                    <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Difficulty:</label>
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Number of Questions:</label>
                    <select value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
                        {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>
                {questions.map((question, index) => (
                    <div key={index} className="question-container">
                        <label>Question {index + 1}:</label>
                        <input
                            type="text"
                            value={question.question}
                            onChange={(e) => handleQuestionChange(index, e.target.value)}
                        />
                        <div className="solution-buttons">
                            <button
                                type="button"
                                className={`solution-button ${question.solution === 'O' ? 'selected' : ''}`}
                                onClick={() => handleSolutionChange(index, 'O')}
                            >
                                O
                            </button>
                            <button
                                type="button"
                                className={`solution-button ${question.solution === 'X' ? 'selected' : ''}`}
                                onClick={() => handleSolutionChange(index, 'X')}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
                <button type="submit" className="create-button">Create</button>
            </form>
        </div>
    );
};

export default QuizApp;
