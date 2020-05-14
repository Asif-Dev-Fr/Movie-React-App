import React from 'react';

const Artiste = (props) => {
    return(
        <div>
            <p>{props.artiste}</p>
            {props.chanson}
        </div>
    )
}

export default Artiste;