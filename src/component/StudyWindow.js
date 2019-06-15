import React, {useState} from 'react';


const StudyWindow = props => {

    const [toSeePile, updateToSee] = useState(props.deck);
    //const [toSeePile, updateToSee] = useState(props.deck.sort(function(a, b){return 0.5 - Math.random()}));
    const [seenPile, updateSeen] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState();
    const [currentCharacter, setCurrentCharacter] = useState(toSeePile[0]);

    const handleTextChange = (event) => {
        console.log(event.target.value);
        setCurrentAnswer(event.target.value.toLowerCase());
    }

    const handleSubmit = () => {

        console.log(currentAnswer);

        if(currentAnswer === undefined){
            console.log('sup');
            return;
        }
        else if(currentAnswer === currentCharacter.romanization){
            console.log("correct!");
            setCurrentAnswer('');
            seenPile.push(toSeePile[0]);
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
        else{
            console.log("false");
            setCurrentAnswer('');
            toSeePile.push(toSeePile[0]);
            toSeePile.shift();
            setCurrentCharacter(toSeePile[0]);
        }
    }

    return(
      <div className="study-window">
          <div className="characterDisplay">
              {currentCharacter ? currentCharacter.character : <div>Complete!</div>}
          </div>
          <div>
              {currentCharacter ? 
                    <div>
                        <input type="text" value={currentAnswer} onChange={handleTextChange}></input>
                    <button onClick={handleSubmit}>Submit</button>
                    </div> : null}
          </div>
      </div>
    )
}

export default StudyWindow;
