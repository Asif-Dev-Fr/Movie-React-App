import React from 'react';

const ResultForOne = (props) => {
    return(
        <div className="resultForOne" onClick={() => props.openPopup(props.result.imdbID)}>
            {
                (props.result.Poster !== 'N/A') ?  
                <img src={props.result.Poster} alt={props.result.Title} /> : <div className="errorImg">Image not available</div>  
            }
            <h3>{props.result.Title}</h3>
        </div>
    )
}


export default ResultForOne;