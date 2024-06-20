import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './default.css';

const QuizDetail = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([
        { question: 'Sample Question 1', answer: 'Sample Answer 1' },
        { question: 'Sample Question 2', answer: 'Sample Answer 2' },
        // Add more questions as needed
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="quiz-detail-container">
            <h2>Quiz {id}</h2>
            <div className="question">
                <h3>Question {currentQuestionIndex + 1}</h3>
                <p>{questions[currentQuestionIndex].question}</p>
            </div>
            <div className="controls">
                <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                    Next
                </button>
                <button>Show Answer</button>
            </div>
        </div>
    );
};

export default QuizDetail;
