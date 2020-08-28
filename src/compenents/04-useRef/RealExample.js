import React, { useState} from 'react'
import '../02-useEffect/effects.css'

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';




export function RealExample() {

    const [show, setShow] = useState(false);

    return (
      <div>
        <h1>RealExampleUseRef</h1>
        <hr />

        { show && <MultipleCustomHooks />}

        <button className="btn btn-primary mt-5"
        onClick = {() =>{
            setShow( !show );
        }}> Show/Hide </button>

      </div>
    );
}

export default RealExample
