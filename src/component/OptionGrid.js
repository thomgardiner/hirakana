import React, {useState} from 'react';
import './OptionGrid.css';


const OptionGrid= props => {

    const [studyObj, setStudyObj] = useState([]);
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


    const handleCheck = (input, index) => {
        console.log(input + " is the input");
        console.log(index + " is the index");
        studyObj.push(props.data[index]);
        console.log(studyObj);
        studyValues[index] = !studyValues[index];


        //setStudyValue(studyValues[index] = !studyValues[index]);
       // setStudyValue(studyValues);

    }

   return(
      <div className="options-grid">
        {props.data.map((row, index) => (
            <div key={index + '_container'}className="container">
                <input key={index + '-input'} type="checkbox" checked={studyValues[index]} onChange={() => handleCheck(row, index)}></input>
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
