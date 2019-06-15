import React, {useState, useContext, useReducer} from 'react';
import OptionWindow from './component/OptionWindow'
import OptionGrid from './component/OptionGrid'
import StudyWindow from './component/StudyWindow'
import hiraganaImport from './data/hiragana_new';
import katakanaImport from './data/katakana_new';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './App.css';

const App = props => {
  
  const [currentStep, setStep] = useState('start');
  const [dataSet, setDataSet] = useState('default');
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
            
            <div className="Row">
                <Button variant="contained" color="primary" onClick={generateDeck}> Study! </Button> 
              </div>
            </div> : null
          } 
        
        {/* STUDY */}
        {currentStep === 'study' ? 
          <div>
            <StudyWindow deck={studyObj.flat().sort(function(a, b){return 0.5 - Math.random()})} />
            <Button id="backButton" variant="contained" color="primary" onClick={() => setStep('start')}> Back </Button>
          </div> : null}
        </div>
  )
  
}

export default App;
