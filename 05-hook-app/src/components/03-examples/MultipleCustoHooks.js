import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustoHooks = () => {
  
  const {counter, increment} = useCounter(1);
  
  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
  const {author, quote} = !!data && data[0];
  


  return (
    <div>
        <h1>BreackingBad Quotes</h1>
        <hr />

        {
          loading
            ?
              (
                <div className="alert alert-info text-center">
                  Loading...
                </div>
              )
            :
              (
                <blockquote className="blockquote text-end">
                  <p className="mb-1" >{author}</p>
                  <footer className="blockquote-footer">{quote}</footer>
                </blockquote>
              )
        }

        <button className="btn btn-primary" onClick={increment}>
           Next Quote
        </button>
    </div>

  )
}
