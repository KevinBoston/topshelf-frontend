import React from 'react';
import ResultCard from './ResultCard'

const ResultsList = (props) => {      
    return(
        <>
            {props.results && props.results.map((result =>{
                console.log(result)
                return(<ResultCard result={result} key={result.id} />)
            }))}
        </>
    )
}

export default ResultsList