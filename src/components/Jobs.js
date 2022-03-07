import React from 'react';
import {useState} from 'react';


export default function Jobs( charData ) {
    return (
        <div className="job-container">
            
          <div className="job">

          {/* {charData.map((charData) => { */}
          <p>  {charData.Character.ClassJobs[0].Name} {" "}
          Level: {charData.Character.ClassJobs[0].Level}
          Exp: {charData.Character.ClassJobs[0].ExpLevel}/{charData.Character.ClassJobs[0].ExpLevelMax}
          </p>
          {/* {charData.map(char, index) => {
              {char.ClassJobs.Name}
            
          }

          } */}

{/* // })} */}
 </div>
        </div>
    );
}

