import React from 'react';

const Search = (props) => {
    return(
        <section className="searchBoxWrap">
            <input 
                type="text" 
                className="searchbox" 
                placeholder="Search for a movie" 
                onChange={props.handleInput} 
                onKeyPress={props.search}
            />
        </section>
    )
}

export default Search;