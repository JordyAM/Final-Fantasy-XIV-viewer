import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import Minions from './components/Minions';
import Jobs from './components/Jobs';
import About from './components/About';
import Character from './components/Character';
function App() {

  const [data, setData] = useState([]);
  const [charData, setCharData] = useState();

  useEffect(() => {fetch('https://xivapi.com/character/5030778?data=MIMO')
.then((res) => res.json())
.then((res) => {
setCharData(res);

})
.catch(console.error);}, []);

if (!charData) {
  return <div>Loading...</div>
}
console.log(charData);
// console.log(data);

  return (
    <div >
      <nav>
        <h1><Link to="/">FFXIV Character Viewer</Link></h1>
        <h1><Link to="/components/Jobs">Classes/Jobs</Link></h1>
        <h1><Link to="/components/Minions">Minions</Link></h1>
        <h1><Link to="./components/About">About</Link></h1>
        </nav>
        <main>
     
      <Routes>
        <Route path="/" element={<Character charData={charData} />}/>
        <Route path='/components/Jobs' element={<Jobs charData={charData}/>} />
        <Route path='/components/Minions' element={<Minions charData={charData}/>} /> 
        <Route path='/components/About' element= {<About />} />
       </Routes>
      </main>
     
    </div>
  );
}

export default App;
