import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import './StudyWindow.css';


const StudyWindow = props => {

    const [toSeePile, updateToSee] = useState([...props.deck]);
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
            toSeePile.push(toSeePile[0]);
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
        else{
            console.log("false");
            setItemsSeen(itemsSeen + 1);
            setCurrentAnswer('');
            toSeePile.push(toSeePile[0]);
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
    }

    return(
      <div className="study-window">
          <div>
              <p>Score: {currentScore} / {itemsSeen} </p>
          </div>
          <div>
              <div id="characterDisplay">{currentCharacter.character}</div>
          </div>
          <div>
              {currentCharacter ? 
                    <div>
                        <input autoComplete="off" id="answerBox" type="text" value={currentAnswer} onKeyDown={handleEnter} onChange={handleTextChange}></input>
                        <br></br>
                        <Button id="submitButton" variant="contained" color="primary" onClick={handleSubmit}> Submit </Button>
                    </div> : null}
          </div>
      </div>
    )
}

export default StudyWindow;
