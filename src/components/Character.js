import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character(props) {
    const [data, setData] = useState([{}]);

    useEffect(() => {fetch('https://xivapi.com/character/search?name=Dural Quartermain')
.then((res) => res.json())
.then((res) => {
  setData(res);
  console.log(data);
  fetch(`https://xivapi.com/character/${data.Results[0].ID}`).then((res) => res.json()).then((res) => {
    setData(res);
    console.log(data);
  })

})
.catch(console.error);}, []);

if (!data) {
    return <div>Loading...</div>
  }
  

    return (
        <div>
             <img
        src={data.Character.Avatar}
        alt={data.Character.Name}
        />
             <p>{data.Character.name}</p>
        </div>
    );
}

