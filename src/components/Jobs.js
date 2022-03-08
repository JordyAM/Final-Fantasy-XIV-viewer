import React from 'react';
import {useState, useEffect} from 'react';

 
const Jobs = ( {charData} ) => {

 console.log(charData);

 if (!charData) {
  return <div>Loading...</div>
}
const iconUrl= 'https://xivapi.com/';
    return (
      <div className="job-container">
        <div className="character-portrait">
          <img src={charData.Character.Avatar} />
          <h1>Dural Quartermain</h1>
        </div>
        <div className="job-list">
          {charData.Character.ClassJobs.map(char => (
            <div> 
            <p>
            <img src={iconUrl + char.Job.Icon} width="30" height="30" />
            <b>{char.Name} {" "}</b>{"- "} 
            <b>Level:</b> {char.Level} {" "}
            <b>Exp:</b> {char.ExpLevel}/{char.ExpLevelMax} 
            </p> </div>
          ))}
 </div>
        </div>
    );
}

export default Jobs