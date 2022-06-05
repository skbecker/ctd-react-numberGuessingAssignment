import React from "react";
import Button from "./Button";

function GuessControl( { onSubmitGuess } ) {
  const [currentGuess, setGuess] = React.useState(''); 

  const handleInputChange = (event) => {
    let latestGuess = event.target.value;
    setGuess(latestGuess);
  }

  const handleSubmitGuess = (event) => {
    event.preventDefault();
  
    onSubmitGuess(Number(currentGuess));
    setGuess('');
}

    return (
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmitGuess}>Submit Guess</Button>
      </div>
    );

}

export default GuessControl;
