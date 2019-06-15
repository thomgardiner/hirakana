import React, {useState} from 'react';


const StudyWindow = props => {

    const [toSeePile, updateToSee] = useState(props.deck);
    //const [toSeePile, updateToSee] = useState(props.deck.sort(function(a, b){return 0.5 - Math.random()}));
    const [currentAnswer, setCurrentAnswer] = useState();
    const [currentCharacter, setCurrentCharacter] = useState(toSeePile[0]);
    const [currentScore, setScore] = useState(0);
    const [itemsSeen, setItemsSeen] = useState(0);

    const handleTextChange = (event) => {
        console.log(event.target.value);
        setCurrentAnswer(event.target.value.toLowerCase());
    }

    const handleEnter = (event) => {
        if(event.keyCode === 13){
            console.log("enter");
            handleSubmit();
        }
    }

    const handleSubmit = () => {

        if(currentAnswer === undefined){
            console.log("input something");
            return;
        }
        else if(currentAnswer === currentCharacter.romanization){
            console.log("correct!");
            setScore(currentScore + 1);
            setItemsSeen(itemsSeen + 1);
            setCurrentAnswer('');
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
        else{
            console.log("false");
            setItemsSeen(itemsSeen + 1);
            setCurrentAnswer('');
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
    }

    return(
      <div className="study-window">
          <div>
              <p>Score: {currentScore} / {itemsSeen} </p>
          </div>
          <div className="characterDisplay">
              {currentCharacter ? currentCharacter.character : <div>Complete!</div>}
          </div>
          <div>
              {currentCharacter ? 
                    <div>
                        <input id="answerBox" type="text" value={currentAnswer} onKeyDown={handleEnter} onChange={handleTextChange}></input>
                    <button onClick={handleSubmit}>Submit</button>
                    </div> : null}
          </div>
      </div>
    )
}

export default StudyWindow;
