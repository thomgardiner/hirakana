import React, {useState} from 'react';
import OptionWindow from './component/OptionWindow'
import OptionGrid from './component/OptionGrid'
import hiraganaImport from './data/hiragana_new';
import katakanaImport from './data/katakana_new';

import './App.css';

const App = props => {
  
  const [currentStep, setStep] = useState('start');
  const [currentScore, setScore] = useState(0);
  const [totalSeen, setSeen] = useState(0);
  const [dataSet, setDataSet] = useState('default');
  const [totalQuestions, setTotal] = useState('0');
  const [studyObj, setStudyObj] = useState([]);

const setData = (data) => {
  if(data === 'hiragana'){
    setDataSet(hiraganaImport);
    console.log(hiraganaImport);
  }
  else if(data === 'katakana'){
    setDataSet(katakanaImport);
  }
}

const setStudyObject = (data) => {
    setStudyObj(data);
}

  return (
      <div className="App">
        {/* OPTIONS */}
        {currentStep === 'start' ? 
        <OptionWindow setData={setData} /> : null}
          {/* LOAD GRID ONCE DATA SET IS CHOSEN */}
          {dataSet !== "default" ? 
            <div>
            <OptionGrid data={dataSet} setStudy={setStudyObject} /> 
            <button> Study! </button> 
            </div> : null
          } 
        
        {/* STUDY */}
        {currentStep === 'study' ? 
        <p> You're studying </p>: null}
        <div>
          </div>
      </div>
  )
  

}

export default App;
