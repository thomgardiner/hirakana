import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import './StudyWindow.css';


const StudyWindow = props => {

    const [toSeePile, updateToSee] = useState([...props.deck]);
    const [currentAnswer, setCurrentAnswer] = useState();
    const [currentCharacter, setCurrentCharacter] = useState(toSeePile[0]);
    const [currentScore, setScore] = useState(0);
    const [itemsSeen, setItemsSeen] = useState(0);

    let lastCard = props.deck[props.deck.length-1];

    const handleTextChange = (event) => {
        setCurrentAnswer(event.target.value.toLowerCase());
    }

    const handleEnter = (event) => {
        if(event.keyCode === 13){
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        if(currentAnswer === undefined){
            return;
        }
        else if(currentAnswer === currentCharacter.romanization){
            //correct
            setScore(currentScore + 1);
            setItemsSeen(itemsSeen + 1);
            setCurrentAnswer('');

            //randomize order once all cards have been seen
            if(toSeePile[0] === lastCard){
                toSeePile.push(toSeePile[0]);
                toSeePile.shift();
                toSeePile.sort(function(a, b){return 0.5 - Math.random()});
                setCurrentCharacter(toSeePile[0]);
                lastCard = props.deck[props.deck.length-1]; 
            }
            else{ 
            //otherwise just move the card to the back of the array
                toSeePile.push(toSeePile[0]);
                toSeePile.shift();
                setCurrentCharacter(toSeePile[0]);
            }
        }
        else{
            //false
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
