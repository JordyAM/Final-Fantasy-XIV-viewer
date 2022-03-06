import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character({charData}) {
   

    return (
        <div>
          <p>{charData.Character.Name}</p>
          <div>
            <img src={charData.Character.Avatar}/>
          </div>
        
        Free Company: {charData.Character.FreeCompanyName}
        Nameday:{charData.Character.Nameday}
        <div className="portrait-container">
          <img src={charData.Character.Portrait} />
        </div>
               
             
        </div>
    );
}

