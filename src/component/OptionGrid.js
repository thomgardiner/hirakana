import React, {useState} from 'react';
import './OptionGrid.css';


const OptionGrid= props => {

    const [studyObj, setStudyObj] = useState([]);

    const handleCheck = (input, index) => {
        props.studyValues[index] = !props.studyValues[index];
        let tempArr = props.studyValues.slice(0);
        props.setStudyValues(tempArr);
    }

   return(
      <div className="options-grid">
        {props.data.map((row, index) => (
            <div key={index + '_container'}className="container">
                <input key={index + '-input'} type="checkbox" checked={props.studyValues[index]} onChange={() => handleCheck(row, index)}></input>
                <div className="characterContainer" key={index + '-char'}>
                {row.map((item, index1) => (
                    <div className="character-square" key={index + "_" + index1}> {row[index1].character}
                   </div>
                ))}
            </div>
        </div>
        ))}
      </div>
    )
  
}

export default OptionGrid;
