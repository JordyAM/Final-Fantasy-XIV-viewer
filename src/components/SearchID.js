import React, {useState, useEffect} from 'react';

function SearchID({handleChange, handleSubmit, charID}) {

    return (
        <form onSubmit={handleSubmit} className="character-form">
          <input
            placeholder="Input character ID"
            type="text"
            name="charID"
            required
            onChange={handleChange}
            value={charID}
          />  
          <button type="submit">
            Search
          </button>
        </form>            
    );
}

export default SearchID;