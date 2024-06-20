import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './default.css';

const Quiz = ({ quizzes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const quiz = quizzes.find(q => q.id === parseInt(id));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [startQuiz, setStartQuiz] = useState(false);

    if (!quiz) {
        return <div>Quiz not found!</div>;
    }

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowAnswer(false);
            setSelectedAnswer('');
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setShowAnswer(false);
            setSelectedAnswer('');
        }
    };

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleHome = () => {
        navigate('/');
    };

    const currentQuestion = quiz.questions[currentQuestionIndex];

    if (!startQuiz) {
        return (
            <div className="quiz-detail-container">
                <button className="home-button" onClick={handleHome}>Home</button>
                <h2>{quiz.topic} Quiz</h2>
                <div className="quiz-info">
                    <p>Topic: {quiz.topic}</p>
                    <p>Difficulty: {quiz.difficulty}</p>
                    <p>Number of Questions: {quiz.questions.length}</p>
                </div>
                <button className="start-button" onClick={() => setStartQuiz(true)}>Start Quiz</button>
            </div>
        );
    }

    return (
        <div className="quiz-detail-container">
            <button className="home-button" onClick={handleHome}>Home</button>
            <h2>{quiz.topic} Quiz</h2>
            <div className="question">
                <h3>Question {currentQuestion.num}</h3>
                <p>{currentQuestion.question}</p>
            </div>
            <div className="answer-buttons">
                <button
                    className={`answer-button ${selectedAnswer === 'O' ? (showAnswer ? (currentQuestion.solution === 'O' ? 'correct' : 'incorrect') : 'selected') : ''}`}
                    onClick={() => handleAnswerClick('O')}
                    disabled={showAnswer}
                >
                    O
                </button>
                <button
                    className={`answer-button ${selectedAnswer === 'X' ? (showAnswer ? (currentQuestion.solution === 'X' ? 'correct' : 'incorrect') : 'selected') : ''}`}
                    onClick={() => handleAnswerClick('X')}
                    disabled={showAnswer}
                >
                    X
                </button>
            </div>
            <div className="controls">
                <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentQuestionIndex === quiz.questions.length - 1}>
                    Next
                </button>
                <button onClick={handleShowAnswer}>Show Answer</button>
            </div>
        </div>
    );
};

export default Quiz;
