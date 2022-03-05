import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import Minions from './components/Minions';
import Jobs from './components/Jobs';
import About from './components/About';
import Character from './components/Character';
function App() {

  
  // const [charData, setCharData] = useState([{}])




// useEffect(() => {fetch('https://xivapi.com/character/')
// .then((res) => res.json())
// .then((res) => {
//   setData(res);
//   console.log(data);

// })
// .catch(console.error);}, []);

// if (!data) {
//   return <div>Loading...</div>
// }

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
        <Route path="/" element={<Character />}/>
        <Route path='/components/Jobs' element={<Jobs />} />
        <Route path='/components/Minions' element={<Minions />} /> 
        <Route path='/components/About' element= {<About />} />
       </Routes>
      </main>
     
    </div>
  );
}

export default App;
