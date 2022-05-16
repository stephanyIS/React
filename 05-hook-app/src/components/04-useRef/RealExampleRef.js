import React, {useState } from 'react';
import { MultipleCustoHooks } from '../03-examples/MultipleCustoHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>

        { show && <MultipleCustoHooks/> }

        <button
            className="btn btn-primary mt-5"
            onClick={ ()=>{
                setShow(!show);
            }}
        >
            Show/Hide
        </button>
    </div>
  )
}
