import React from 'react';
import ResultForOne from './ResultForOne';

const Results = ({results, openPopup}) => {
    return (
        <section className="results">
            {/* On récupère la propriété results dans les props et on va parcourir l'array avec la méthode map() */}
            {results.map(value => (
                <ResultForOne key={value.imdbID} result={value} openPopup={openPopup}/>
            ))}
        </section>
    )
}


export default Results;