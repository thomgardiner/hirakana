import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './OptionWindow.css';

const OptionWindow = props => {

  const [displayMessage, chooseStep] = useState(false);

  const handleHiragana = () => {
    props.setData("hiragana");
    chooseStep(true);
  }

  const handleKatakana = () => {
    props.setData("katakana");
    chooseStep(true);
  }

   return(
      <div className="options-window">
        {displayMessage == false ? 
        <div class="options-message">
          What would you like to study?
        </div> : null}
        <div className="btn-row">
            <Button variant="contained" color="primary"  onClick={() => handleHiragana()}> Hiragana </Button>
            <Button variant="contained" color="primary"  onClick={() => handleKatakana()}> Katakana </Button>
        </div>
      </div>
    )
  
}

export default OptionWindow;
