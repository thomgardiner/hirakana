import React, {useState, useContext, useReducer} from 'react';
import OptionWindow from './component/OptionWindow'
import OptionGrid from './component/OptionGrid'
import StudyWindow from './component/StudyWindow'

import hiraganaImport from './data/hiragana_new';
import katakanaImport from './data/katakana_new';

import './App.css';



function appReducer(state, action){
  switch (action.type){
    case 'add': {
      return 'something';
    }
    case 'something' : {
      return 'something';
    }
    default:{
      return state;
    }
  }
}


const App = props => {
  
  const [currentStep, setStep] = useState('start');
  const [currentScore, setScore] = useState(0);
  const [totalSeen, setSeen] = useState(0);
  const [dataSet, setDataSet] = useState('default');
  const [totalQuestions, setTotal] = useState('0');
  const [studyObj, setStudyObj] = useState([]);
  const [endlessMode, setEndless] = useState(false);
  const [studyValues, setStudyValue] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
])


const setData = (data) => {
  if(data === 'hiragana'){
    setDataSet(hiraganaImport);
  }
  else if(data === 'katakana'){
    setDataSet(katakanaImport);
  }
}

const setStudyValues = (data) => {
    setStudyValue(data);
}

const handleEndless = () => {
    let val = !endlessMode;
    setEndless(val);
}

const handleStudy = () => {
  setStep('study');
}

const generateDeck = () => {
  setStudyObj([]);
  let tempObj = [];
  studyValues.forEach(function(item, index){
    if(item){
      tempObj.push(dataSet[index]);
    }
  })
  setStudyObj(tempObj);
  handleStudy();
}


  return (
      <div className="App">
        {/* OPTIONS */}
        {currentStep === 'start' ? 
        <OptionWindow setData={setData} /> : null}
          {/* LOAD GRID ONCE DATA SET IS CHOSEN */}
          {dataSet !== "default" && currentStep === 'start' ? 
            <div>
            <OptionGrid data={dataSet} setStudyValues={setStudyValues} studyValues={studyValues}/> 
            <button onClick={generateDeck}> Study! </button> 
            </div> : null
          } 
        
        {/* STUDY */}
        {currentStep === 'study' ? 
        <StudyWindow deck={studyObj.flat()} />: null}
        <div>
          </div>
      </div>
  )
  

}

export default App;
