import React, {useState} from 'react';
import OptionWindow from './component/OptionWindow'
import OptionGrid from './component/OptionGrid'
import hiraganaImport from './data/hiragana';
import katakanaImport from './data/katakana';

import './App.css';

const App = props => {
  
  const [currentStep, setStep] = useState('start');
  const [currentScore, setScore] = useState(0);
  const [totalSeen, setSeen] = useState(0);
  const [dataSet, setDataSet] = useState('default');
  const [totalQuestions, setTotal] = useState('0');

  const groupBy = (amountOfItemsPerGroup, items) => {
    var groups = [], 
      group, 
      total = items.length;
    for (var i=0; i < total; i += amountOfItemsPerGroup) {
      group = items.slice(i, i+amountOfItemsPerGroup);
      groups.push(group);
    }
    return groups;
}

const hiragana = groupBy(5, hiraganaImport);
const katakana = groupBy(5, katakanaImport);

const setData = (data) => {
  if(data === 'hiragana'){
    setDataSet(hiragana);
  }
  else if(data === 'katakana'){
    setDataSet(katakana);
  }
}


  return (
      <div className="App">
        {/* OPTIONS */}
        {currentStep === 'start' ? 
        <OptionWindow setData={setData} /> : null}
          {dataSet !== "default" ? 
            <OptionGrid data={dataSet} /> : null
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
