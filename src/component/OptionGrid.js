import React, {useState} from 'react';
import './OptionGrid.css';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const OptionGrid= props => {

    const [studyObj, setStudyObj] = useState([]);

    const handleCheck = (input, index) => {
        props.studyValues[index] = !props.studyValues[index];
        let tempArr = props.studyValues.slice(0);
        props.setStudyValues(tempArr);
    }

    const selectAll = () => {
        props.studyValues.forEach(function(item, index){
            props.studyValues[index] = true;
        })
        let tempArr = props.studyValues.slice(0);
        props.setStudyValues(tempArr);
    }

    const clearAll = () => {
        props.studyValues.forEach(function(item, index){
            props.studyValues[index] = false;
        })
        let tempArr = props.studyValues.slice(0);
        props.setStudyValues(tempArr);
    }

    //<input key={index + '-input'} type="checkbox" checked={props.studyValues[index]} onChange={() => handleCheck(row, index)}></input>

   return(
      <div className="options-grid Row">
        {props.data.map((row, index) => (
            <div key={index + '_container'}className="container">
                <Checkbox className="checkbox" key={index + '-input'} type="checkbox" checked={props.studyValues[index]} onChange={() => handleCheck(row, index)} />
                <div className="characterContainer" key={index + '-char'}>
                {row.map((item, index1) => (
                    <div className="character-square" key={index + "_" + index1}> {row[index1].character}
                   </div>
                ))}
            </div>
        </div>
        ))}
            <div className="Row" id="gridButtons">
                <Button variant="contained" color="primary" onClick={() => selectAll()}> Select All </Button>
                <Button variant="contained" color="primary" onClick={() => clearAll()}> Clear All </Button>
            </div>
      </div>
    )
  
}

export default OptionGrid;
