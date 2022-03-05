import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character(props) {
    const [data, setData] = useState([{}]);
    const [chardata, setCharData] = useState();

    useEffect(() => {fetch('https://xivapi.com/character/search?name=Dural Quartermain')
.then((res) => res.json())
.then((res) => {
  setData(res);
//   console.log(data);
  fetch(`https://xivapi.com/character/${data.Results[0].ID}`).then((res) => res.json()).then((res) => {
    setData(res);
    
  })
})
.catch(console.error);}, []);

if (!data) {
    return <div>Loading...</div>
  }
  console.log(data);


    return (
        <div>
              <img
        src="https://img2.finalfantasyxiv.com/f/ffefaa778f4cd2494c2ade21ec765637_2e97c13fdd593d15d543093f8a37b6f0fc0_96x96.jpg?1646437687"
        
        />
             <p>Dural Quartermain </p> 
             
        </div>
    );
}
