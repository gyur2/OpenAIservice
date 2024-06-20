import React from 'react';

function Question({ question }) {
    return (
        <div>
            <h2>Question {question.id}</h2>
            <p>{question.text}</p>
            <p>Difficulty: {question.difficulty}</p>
            {question.type === 'multiple-choice' ? (
                <div>
                    {question.choices.map((choice, index) => (
                        <div key={index}>
                            <input type="radio" id={`choice${index}`} name="choices" value={choice} />
                            <label htmlFor={`choice${index}`}>{choice}</label>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <input type="text" placeholder="Type your answer here" />
                </div>
            )}
        </div>
    );
}

export default Question;
