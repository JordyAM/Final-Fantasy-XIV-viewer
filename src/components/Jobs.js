import React from 'react';
import {useState, useEffect} from 'react';

 
const Jobs = ( {charData} ) => {

 console.log(charData);

 if (!charData) {
  return <div>Loading...</div>
}

    return (
      <div className="job-container">
        <div className="char-image">
          <img src={charData.Character.Portrait} />
        </div>
        <div className="job">
          {charData.Character.ClassJobs.map(char => (
            <div>  <p>  <b>{char.Name} {" "}</b>{"- "} 
            Level: {char.Level}
            Exp: {char.ExpLevel}/{char.ExpLevelMax} 
            </p> </div>
          ))}
         
           
 

 </div>
        </div>
    );
}

export default Jobs