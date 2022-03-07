import React from 'react';
import {useState} from 'react';
const job = [
  {
  ClassID: 1,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 19,
  Level: 90,
  Name: "gladiator / paladin",
  UnlockedState: {
  ID: 19,
  Name: "Paladin"
  }
  },
  {
  ClassID: 3,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 21,
  Level: 0,
  Name: "marauder / warrior",
  UnlockedState: {
  ID: 3,
  Name: "Marauder"
  }
  },
  {
  ClassID: 32,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 32,
  Level: 0,
  Name: "dark knight / dark knight",
  UnlockedState: {
  ID: 32,
  Name: "Dark Knight"
  }
  },
  {
  ClassID: 37,
  ExpLevel: 276300,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 5715700,
  IsSpecialised: false,
  JobID: 37,
  Level: 80,
  Name: "gunbreaker / gunbreaker",
  UnlockedState: {
  ID: 37,
  Name: "Gunbreaker"
  }
  },
  {
  ClassID: 6,
  ExpLevel: 3667558,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 2324442,
  IsSpecialised: false,
  JobID: 24,
  Level: 80,
  Name: "conjurer / white mage",
  UnlockedState: {
  ID: 24,
  Name: "White Mage"
  }
  },
  {
  ClassID: 26,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 28,
  Level: 0,
  Name: "arcanist / scholar",
  UnlockedState: {
  ID: 28,
  Name: "Scholar"
  }
  },
  {
  ClassID: 33,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 33,
  Level: 0,
  Name: "astrologian / astrologian",
  UnlockedState: {
  ID: 33,
  Name: "Astrologian"
  }
  },
  {
  ClassID: 40,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 40,
  Level: 90,
  Name: "sage / sage",
  UnlockedState: {
  ID: 40,
  Name: "Sage"
  }
  },
  {
  ClassID: 2,
  ExpLevel: 3216884,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 2775116,
  IsSpecialised: false,
  JobID: 20,
  Level: 80,
  Name: "pugilist / monk",
  UnlockedState: {
  ID: 20,
  Name: "Monk"
  }
  },
  {
  ClassID: 4,
  ExpLevel: 5514,
  ExpLevelMax: 68400,
  ExpLevelTogo: 62886,
  IsSpecialised: false,
  JobID: 22,
  Level: 30,
  Name: "lancer / dragoon",
  UnlockedState: {
  ID: 4,
  Name: "Lancer"
  }
  },
  {
  ClassID: 29,
  ExpLevel: 0,
  ExpLevelMax: 663000,
  ExpLevelTogo: 663000,
  IsSpecialised: false,
  JobID: 30,
  Level: 53,
  Name: "rogue / ninja",
  UnlockedState: {
  ID: 30,
  Name: "Ninja"
  }
  },
  {
  ClassID: 34,
  ExpLevel: 168300,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 5823700,
  IsSpecialised: false,
  JobID: 34,
  Level: 80,
  Name: "samurai / samurai",
  UnlockedState: {
  ID: 34,
  Name: "Samurai"
  }
  },
  {
  ClassID: 39,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 39,
  Level: 90,
  Name: "reaper / reaper",
  UnlockedState: {
  ID: 39,
  Name: "Reaper"
  }
  },
  {
  ClassID: 5,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 23,
  Level: 0,
  Name: "archer / bard",
  UnlockedState: {
  ID: 5,
  Name: "Archer"
  }
  },
  {
  ClassID: 31,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 31,
  Level: 0,
  Name: "machinist / machinist",
  UnlockedState: {
  ID: 31,
  Name: "Machinist"
  }
  },
  {
  ClassID: 38,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 38,
  Level: 0,
  Name: "dancer / dancer",
  UnlockedState: {
  ID: 38,
  Name: "Dancer"
  }
  },
  {
  ClassID: 7,
  ExpLevel: 0,
  ExpLevelMax: 61900,
  ExpLevelTogo: 61900,
  IsSpecialised: false,
  JobID: 25,
  Level: 28,
  Name: "thaumaturge / black mage",
  UnlockedState: {
  ID: 7,
  Name: "Thaumaturge"
  }
  },
  {
  ClassID: 26,
  ExpLevel: 1012087,
  ExpLevelMax: 3018000,
  ExpLevelTogo: 2005913,
  IsSpecialised: false,
  JobID: 27,
  Level: 71,
  Name: "arcanist / summoner",
  UnlockedState: {
  ID: 27,
  Name: "Summoner"
  }
  },
  {
  ClassID: 35,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 35,
  Level: 0,
  Name: "red mage / red mage",
  UnlockedState: {
  ID: 35,
  Name: "Red Mage"
  }
  },
  {
  ClassID: 36,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 36,
  Level: 70,
  Name: "blue mage / blue mage",
  UnlockedState: {
  ID: null,
  Name: "Blue Mage (Limited Job)"
  }
  },
  {
  ClassID: 8,
  ExpLevel: 0,
  ExpLevelMax: 300,
  ExpLevelTogo: 300,
  IsSpecialised: false,
  JobID: 8,
  Level: 1,
  Name: "carpenter / carpenter",
  UnlockedState: {
  ID: 8,
  Name: "Carpenter"
  }
  },
  {
  ClassID: 9,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 9,
  Level: 0,
  Name: "blacksmith / blacksmith",
  UnlockedState: {
  ID: 9,
  Name: "Blacksmith"
  }
  },
  {
  ClassID: 10,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 10,
  Level: 0,
  Name: "armorer / armorer",
  UnlockedState: {
  ID: 10,
  Name: "Armorer"
  }
  },
  {
  ClassID: 11,
  ExpLevel: 0,
  ExpLevelMax: 837000,
  ExpLevelTogo: 837000,
  IsSpecialised: false,
  JobID: 11,
  Level: 55,
  Name: "goldsmith / goldsmith",
  UnlockedState: {
  ID: 11,
  Name: "Goldsmith"
  }
  },
  {
  ClassID: 12,
  ExpLevel: 445332,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 5546668,
  IsSpecialised: true,
  JobID: 12,
  Level: 80,
  Name: "leatherworker / leatherworker",
  UnlockedState: {
  ID: 12,
  Name: "Leatherworker"
  }
  },
  {
  ClassID: 13,
  ExpLevel: 0,
  ExpLevelMax: 300,
  ExpLevelTogo: 300,
  IsSpecialised: false,
  JobID: 13,
  Level: 1,
  Name: "weaver / weaver",
  UnlockedState: {
  ID: 13,
  Name: "Weaver"
  }
  },
  {
  ClassID: 14,
  ExpLevel: 2014,
  ExpLevelMax: 3000,
  ExpLevelTogo: 986,
  IsSpecialised: false,
  JobID: 14,
  Level: 7,
  Name: "alchemist / alchemist",
  UnlockedState: {
  ID: 14,
  Name: "Alchemist"
  }
  },
  {
  ClassID: 15,
  ExpLevel: 566,
  ExpLevelMax: 970,
  ExpLevelTogo: 404,
  IsSpecialised: false,
  JobID: 15,
  Level: 4,
  Name: "culinarian / culinarian",
  UnlockedState: {
  ID: 15,
  Name: "Culinarian"
  }
  },
  {
  ClassID: 16,
  ExpLevel: 0,
  ExpLevelMax: 5992000,
  ExpLevelTogo: 5992000,
  IsSpecialised: false,
  JobID: 16,
  Level: 80,
  Name: "miner / miner",
  UnlockedState: {
  ID: 16,
  Name: "Miner"
  }
  },
  {
  ClassID: 17,
  ExpLevel: 0,
  ExpLevelMax: 0,
  ExpLevelTogo: 0,
  IsSpecialised: false,
  JobID: 17,
  Level: 0,
  Name: "botanist / botanist",
  UnlockedState: {
  ID: 17,
  Name: "Botanist"
  }
  },
  {
  ClassID: 18,
  ExpLevel: 0,
  ExpLevelMax: 65600,
  ExpLevelTogo: 65600,
  IsSpecialised: false,
  JobID: 18,
  Level: 29,
  Name: "fisher / fisher",
  UnlockedState: {
  ID: 18,
  Name: "Fisher"
  }
  }
  ];

const Jobs = ( {charData} ) => {
  // const job = [];
  //   charData.forEach((elem, index) => {
  //     job.push(elem);
  //   })
  //   console.log(job);
    return (
        <div className="job-container">
            
          <div className="job">
     
          <p>  {charData.Character.ClassJobs[0].Name} {" "}
          Level: {charData.Character.ClassJobs[0].Level}
          Exp: {charData.Character.ClassJobs[0].ExpLevel}/{charData.Character.ClassJobs[0].ExpLevelMax}
          </p>
          {/* {charData.map(char, index) => {
              {char.ClassJobs.Name}
            
          }

          } */}
          {/* {charData.map(data => (
           <p>  {data.Character.ClassJobs[0].Name} {" "} 
          Level: {data.Character.ClassJobs[0].Level}
          Exp: {data.Character.ClassJobs[0].ExpLevel}/{data.Character.ClassJobs[0].ExpLevelMax} 
          </p> 
 ))}  */}
{/* // })} */}
{/* {job.map(data => (
  <div>
    {data.ClassID}{data.Name}
     </div> */}
{/* ))} */}
 </div>
        </div>
    );
}

export default Jobs