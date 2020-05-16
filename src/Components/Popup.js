import React from 'react';

function Popup(props) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ props.selected.Title } <span>({ props.selected.Year })</span></h2>
                <p className="rating">Rating : { props.selected.imdbRating }</p>
                <div className="plot">
                    <img src={props.selected.Poster} alt={ props.selected.Title } />
                    <div className="details">
                        <p> Genre : {props.selected.Genre} </p>
                        <p>{props.selected.Plot}</p>
                        <p>Casting : {props.selected.Actors}</p>
                    </div>
                </div>
                <button className="close" onClick={props.closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup;