import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'



function App() {

  const [data, setData] = useState([{}]);
  
useEffect(() => {

})


useEffect(() => {fetch('https://xivapi.com/character/search?name=Dural Quartermain')
.then((res) => res.json())
.then((res) => {
  setData(res);
  console.log(data);

})
.catch(console.error);}, []);

if (!data) {
  return <div>Loading...</div>
}


  return (
    <div >
      
        Hello World
     
    </div>
  );
}

export default App;
