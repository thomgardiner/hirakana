import React, {useState} from 'react';


const OptionWindow = props => {

  const handleHiragana = () => {
    props.setData("hiragana");
  }

  const handleKatakana = () => {
    props.setData("katakana");
  }

   return(
      <div className="options-window">
        <button onClick={() => handleHiragana()}> Hiragana </button>
        <button onClick={() => handleKatakana()}> Katakana </button>
      </div>
    )
  
}

export default OptionWindow;
