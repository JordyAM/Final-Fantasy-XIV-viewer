import React from 'react';
import ReactTooltip from 'react-tooltip';

function Minions({charData}) {
    return (
        <div>
          {charData.map(data => (
            <img src={data.Minions.Icon} data-tip data-for="minionTip"/>
            <ReactTooltip id="minionTip">{data.Minions.Name}</ReactTooltip>

           
))
        
    
}
</div>
    )}
export default Minions;