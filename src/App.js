import React, {useState, useContext, useReducer} from 'react';
import OptionWindow from './component/OptionWindow'
import OptionGrid from './component/OptionGrid'
import StudyWindow from './component/StudyWindow'
import hiraganaImport from './data/hiragana_new';
import katakanaImport from './data/katakana_new';

import './App.css';

const App = props => {
  
  const [currentStep, setStep] = useState('start');
  //const [currentScore, setScore] = useState(0);
  //const [totalSeen, setSeen] = useState(0);
  const [dataSet, setDataSet] = useState('default');
 // const [totalQuestions, setTotal] = useState('0');
  const [studyObj, setStudyObj] = useState([]);
  const [studyValues, setStudyValue] = useState([])

const setData = (data) => {
  if(data === 'hiragana'){
    setDataSet(hiraganaImport);
    hiraganaImport.forEach(function(item){
      studyValues.push(false);
    })

    let tempArr = studyValues.splice(0);
    setStudyValue(tempArr);
  }

  else if(data === 'katakana'){
    setDataSet(katakanaImport);
    katakanaImport.forEach(function(item){
      studyValues.push(false);
    })

    let tempArr = studyValues.splice(0);
    setStudyValue(tempArr);
  }
}

const setStudyValues = (data) => {
    setStudyValue(data);
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
  setStep('study');
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
        <StudyWindow deck={studyObj.flat().sort(function(a, b){return 0.5 - Math.random()})} />: null}
        <div>
          </div>
      </div>
  )
  
}

export default App;
