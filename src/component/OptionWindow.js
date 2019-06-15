import React, {useState} from 'react';


const OptionWindow = props => {

const state = {
    dataSet: 'default'
}

  const handleHiragana = () => {
    state.dataSet = "hiragana";
    props.setData("hiragana");
  }

  const handleKatakana = () => {
    state.dataSet = "katakana";
    props.setData("katakana");
  }

   return(
      <div className="options-window">
        <button onClick={() => handleHiragana()}> Hiragana </button>
        <button onClick={() => handleKatakana()}> Katakana </button>
      
        <div>
           
        </div>
      
      </div>
    )
  
}

export default OptionWindow;
