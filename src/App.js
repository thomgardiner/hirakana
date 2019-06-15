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
  const [studyValues, setStudyValue] = useState([]);
  const [message, updateMessage] = useState('');
  const [repeatStudy, setRepeat] = useState(false);


const setData = (data) => {

  let input;    
  if(data === 'hiragana'){
      input = hiraganaImport;
  }
  else if(data === 'katakana'){
      input = katakanaImport;
  }

  setDataSet(input);
  
  input.forEach(function(item, index){
    studyValues.push(false);
  })

  let tempArr = studyValues.splice(0);
  setStudyValue(tempArr);

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
  if(tempObj.length > 0){
    updateMessage('');
    setStep('study');
  }
  else{
    updateMessage('You need to choose at least one set')
  }
  
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
              <div>
               {message}
              </div>           
            <div>
                <Button variant="contained" color="primary" onClick={generateDeck}> Study! </Button> 
              </div>
            </div> : null
          } 
        
        {/* STUDY */}
        {currentStep === 'study' ? 
          <div>
            <StudyWindow repeat={repeatStudy} deck={studyObj.flat().sort(function(a, b){return 0.5 - Math.random()})} />
            <Button id="backButton" variant="contained" color="primary" onClick={() => setStep('start')}> Back </Button>
          </div> : null}
        </div>
  )
  
}

export default App;
