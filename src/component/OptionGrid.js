import React, {useState} from 'react';
import './OptionGrid.css';


const OptionGrid= props => {

    const [studyObj, setStudyObj] = useState([]);
    
    const handleCheck = input => {
        console.log(input + "is the input")
    }

   return(
      <div className="options-grid">
        {props.data.map((row, index) => (
            <div key={index + '_container'}className="container">
                <input key={index + '-input'} type="checkbox" onChange={() => handleCheck(row)}></input>
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
