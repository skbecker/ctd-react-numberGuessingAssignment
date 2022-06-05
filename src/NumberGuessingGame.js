import React from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame( props ) {

  const [latestGuess, setLatestGuess] = React.useState(''); //or default value = null? 

  const [numberToGuess, setNumberToGuess] = React.useState(getRandomNumber()); 

  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);

  const handleGuess = (guess) => {
    setNumberOfGuesses(numberOfGuesses + 1);
    setLatestGuess(guess);
  }

  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess('');
  }

    const isCorrectGuess = latestGuess === numberToGuess;

    const isGameOver =
      isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

    return (
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
        </h2>
        <GuessControl onSubmitGuess={handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={latestGuess}
            numberToGuess={numberToGuess}
            numberOfGuesses={numberOfGuesses}
          />
        )}
      </div>
    );
  }


export default NumberGuessingGame;
