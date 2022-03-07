import React from 'react';

function SearchID(props) {
    return (
        <form onSubmit={handleSubmit} className="character-form">
          <input
            placeholder="Input character ID"
            type="text"
            name="charID"
            required
            onChange={handleChange}
          />  
          <button type="submit">
            
          </button>
        </form>
        
            
        
    );
}

export default SearchID;