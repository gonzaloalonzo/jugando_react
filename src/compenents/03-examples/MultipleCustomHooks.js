import React from 'react';
import '../02-useEffect/effects.css';
import { useFectch } from '../../hooks/useFectch';
import { useCounter } from "../../hooks/useCounter";



export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFectch(`https://www.breakingbadapi.com/api/quotes/${ state }`);
    
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr />
        {
        loading 
        ?
         (   <div className="alert alert-info text-center">
                Loading...
            </div>
         )
         :
         (
              <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
         )

        } 
        

        <button className="btn btn-primary"
        onClick={increment}
        >
            Siguente quote
        </button>
        

        </div>
    )
}
