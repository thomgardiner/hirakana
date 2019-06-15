import React, {useState} from 'react';
import './OptionGrid.css';


const OptionGrid= props => {

   return(
      <div className="options-grid">
        
        
        
        {props.data.map((row, index) => (
          
          <div className="characterContainer" key={index}>
            {row.map((item, index1) => (
                    <div className="character-square" key={index + "_" + index1}> {row[index1].character}
                   </div>
            ))}
        </div>
        ))}
      </div>
    )
  
}

export default OptionGrid;
