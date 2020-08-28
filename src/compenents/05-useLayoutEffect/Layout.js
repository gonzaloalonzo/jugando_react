import React, { useRef, useLayoutEffect } from "react";
import "./layout.css";
import { useFectch } from "../../hooks/useFectch";
import { useCounter } from "../../hooks/useCounter";




export const Layout = () => {
  const { state, increment } = useCounter(1);

  const {  data } = useFectch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { quote } = !!data && data[0];
  const pTag = useRef();

  useLayoutEffect(() => {

     console.log( pTag.current.getBoundingClientRect() );
      
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      
        <blockquote className="blockquote text-right">
          <p className="mb-0" ref= {pTag}>{quote}</p>
          
        </blockquote>
    

      <button className="btn btn-primary" onClick={increment}>
        Siguente quote
      </button>
    </div>
  );
};
