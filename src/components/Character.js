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
            <div className='character-block-box'>
              <h3 className='title'>
              <img src={iconUrl + charData.Character.GrandCompany.Rank.Icon} />{" "}
              Grand Company:</h3>
              <p className='name'>
              {charData.Character.GrandCompany.Company.Name}{" "}/{" "}
              {charData.Character.GrandCompany.Rank.Name}</p>
            </div>
          </div>
          <div className="free-company">
            <h3>Free Company: </h3>{charData.Character.FreeCompanyName}
          </div>
          <div className="character-block">
            <div className="character-block-box">
            <h3>
            <img src={iconUrl + charData.Character.GuardianDeity.Icon} />{" "} 
            Nameday:
            </h3>
            {charData.Character.Nameday}
            <h3>Guardien Deity:</h3>
            <p>{charData.Character.GuardianDeity.Name}</p>
            </div>
          </div>
          </div>           
        </div>
    );
}

