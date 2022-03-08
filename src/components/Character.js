import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character({charData}) {
   
  if (!charData) {
    return <div>Loading...</div>
  }
  const iconUrl= 'https://xivapi.com/';
    return (
        <div className="character-container">
          <div className="character-portrait">
            <img src={charData.Character.Portrait} />
          </div>
               
          <div className="character-name">
            <h1>{charData.Character.Name}</h1>
          <div className="character-block">
            <img src={iconUrl + charData.Character.GrandCompany.Rank.Icon} />
            <div className='character-block-box'>
              <p className='title'>Grand Company:</p>
              <p className='name'>{charData.Character.GrandCompany.Company.Name}{" "}/{" "}
              {charData.Character.GrandCompany.Rank.Name}</p>
            </div>
          </div>
            <div className="free-company">
              
              <h3>Free Company: </h3>{charData.Character.FreeCompanyName}
            </div>
            <h3>Nameday:</h3>{charData.Character.Nameday}
          </div>
        
             
        </div>
    );
}

