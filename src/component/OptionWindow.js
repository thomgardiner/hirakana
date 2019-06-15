import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const OptionWindow = props => {

  const handleHiragana = () => {
    props.setData("hiragana");
  }

  const handleKatakana = () => {
    props.setData("katakana");
  }

   return(
      <div className="options-window">
        <div>
            <Button variant="contained" color="primary"  onClick={() => handleHiragana()}> Hiragana </Button>
            <Button variant="contained" color="primary"  onClick={() => handleKatakana()}> Katakana </Button>
        </div>
      </div>
    )
  
}

export default OptionWindow;
