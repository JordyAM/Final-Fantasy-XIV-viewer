import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Character(props) {
    const [data, setData] = useState([]);
    const [charData, setCharData] = useState();

    useEffect(() => {fetch('https://xivapi.com/character/5030778?data=MIMO')
.then((res) => res.json())
.then((res) => {
  setCharData(res);
  // console.log(data);
  //  fetch(`https://xivapi.com/character/${charData.Results[0].ID}?private_key=8a594172894c4dcaa464c08f55358b41f45b593131264ecc8ec1cea96433ee13`).then((cont) => cont.json()).then((cont) => {
  //   setData(cont);
    
  // })
})
.catch(console.error);}, []);

if (!charData) {
    return <div>Loading...</div>
  }
  console.log(charData);
  // console.log(data);


    return (
        <div>
        //       <img
        src="https://img2.finalfantasyxiv.com/f/ffefaa778f4cd2494c2ade21ec765637_2e97c13fdd593d15d543093f8a37b6f0fc0_96x96.jpg?1646437687"
        
        />
             {/* <p>{charData.Results[0].Name}</p> */}
             <div>
               {/* <img src={charData.Results[0].Avatar}/> */}
               </div>
               
             
        </div>
    );
}

