import React, { useState } from 'react';
import questions from './QuizQuestions';
import './quiz.css';

function QuizLogic() {
  // State Properties of the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  // giving functionality

  // when an answer button is clicked
  function handleAnswerClick(isCorrect: boolean) {
    // check if the users clicked answer returns true (the correct answer)
    if (isCorrect) {
      // adds the value of the question to the current state of the score
      setScore(score + questions[currentQuestion].questionValue);
    }

    // determines the position of the next question in the array adding 1 to the idex of the current question
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      // set the question to the next one
      setCurrentQuestion(nextQuestion);
    } else {
      // if out of questions show the final score
      setShowFinalScore(true);
    }
  }

  // the restart button on the final score page
  function handleRestart() {
    // set all the states back to the beginning of the quiz values
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalScore(false);
  }

  // function for the back button on the questions so user can go back to change answer
  function goBack() {
    // if the user has a score it will subtract 1 so the score should calculate properly when they change their answer
    if (score > 0) {
      setScore(score - 1);
    }

    // determines the index of the previous questions
    const previousQuestion = currentQuestion - 1;

    // when the previous question is tan length of questions and greater than 0
    if (previousQuestion <= questions.length || previousQuestion > 0) {
      // change to the previous questions
      setCurrentQuestion(previousQuestion);
    }
  }

  // the percentage of the score rounded to nearest whole number
  const scorePercentage = Math.round((score / questions.length) * 100);

  // string for the final score page
  let finalScoreWords = '';

  // checking the value to show different messages
  if (scorePercentage > 75) {
    finalScoreWords = 'Seems you in fact know your Shoujo and demographics, good job!';
  } else if (scorePercentage > 50) {
    finalScoreWords = "Maybe you've dabbled in Shoujo but you at least know your demographics.";
  } else {
    finalScoreWords = '...soooooo Shoujo...try it.';
  }

  return (
    // if true to show final score it will show thw final score card if false show the quiz
    <div>
      {showFinalScore ? (
        <div className="question-card func-button final-score">
          <h2>{finalScoreWords}</h2>
          <h3>
            You got a {scorePercentage}
            %!
          </h3>
          <h3>
            {score} out of {questions.length} correct
          </h3>
          <button type="button" onClick={() => handleRestart()}>
            Restart
          </button>
        </div>
      ) : (
        <div className="question-card func-button">
          {currentQuestion !== 0 && (
            <button type="button" onClick={() => goBack()} className="direction">
              Back
            </button>
          )}
          {currentQuestion !== 0 && (
            <h3 className="direction">
              Score:
              {score}/{questions.length}
            </h3>
          )}
          <h4>
            Question
            {currentQuestion + 1} of
            {questions.length}
          </h4>
          <div className="question-info">
            <h2 className="question-text">{questions[currentQuestion].questionText}</h2>
            {questions[currentQuestion].question_img !== null && (
              <img src={questions[currentQuestion].question_img} alt="" className="question-img" />
            )}
            {questions[currentQuestion].question_description !== null && (
              <p className="synopsis">
                <em>{questions[currentQuestion].question_description}</em>
              </p>
            )}
          </div>
          <div className="answer-text">
            <ul>
              {questions[currentQuestion].answersOptions.map((answerOption) => (
                <button type="button" key={answerOption.id} onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizLogic;
