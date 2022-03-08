import {Route, Routes, Link} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
// import Minions from './components/Minions';
import Jobs from './components/Jobs';
import About from './components/About';
import Character from './components/Character';
import SearchID from './components/SearchID';
function App() {

  // const [data, setData] = useState([]);
  const [charData, setCharData] = useState(null);
  const [charID, setCharID] = useState('5030778');
  
  useEffect(() => {
    getCharacter(charID);
  }, []);


  function getCharacter(charID){
    const url = `https://xivapi.com/character/${charID}?extended=true`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setCharData(res);
      setCharID('');
      })
.catch(console.error);
  }

  function handleChange(event){
    setCharID(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    getCharacter(charID);
  }
// 
  
if (!charData) {
  return <div>Loading...</div>
}


  return (
    <div >
      <nav className='navigation'>
        <h1><Link to="/">FFXIV Character Viewer</Link></h1>
        <h1><Link to="/components/Jobs">Classes/Jobs</Link></h1>
        {/* <h1><Link to="/components/Minions">Minions</Link></h1> */}
        <h1><Link to="./components/About">About</Link></h1>
        </nav>
      
        <SearchID 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          charID={charID}
        />
      
        <main>
    
      <Routes>
        <Route path="/" element={<Character charData={charData} />}/>
        <Route path='/components/Jobs' element={<Jobs charData={charData}/>} />
        {/* <Route path='/components/Minions' element={<Minions charData={charData}/>} />  */}
        <Route path='/components/About' element= {<About />} />
       </Routes>
      </main>
     
    </div>
  );
}

export default App;
