import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character({charData}) {
   

    return (
        <div className="character-container">
          <h1>{charData.Character.Name}</h1>
          <div>
            {/* <img src={charData.Character.Avatar}/> */}
          </div>
        
        Free Company: {charData.Character.FreeCompanyName}
        Nameday:{charData.Character.Nameday}
        <div className="portrait-container">
          <img src={charData.Character.Portrait} />
        </div>
               
             
        </div>
    );
}

