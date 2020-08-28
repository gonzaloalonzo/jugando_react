import React, {useEffect, useState} from 'react'
import { Message } from './Message';

import "./effects.css";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });



    const {name,email} = formState;



    useEffect(()=>{
        //console.log('Hey!!')
    },[]);

     useEffect(() => {
       //console.log("formState cambio!!");
     }, [formState]);

     useEffect(() => {
      // console.log("emailcambio!!");
     }, [email]);

    const handleInputChange = ({target})=>{
        setformState(
            {
                ...formState,
                [target.name]: target.value // el value ingresado se pasa al target name(name o email)
            }
        );
    }

    return (
      <>
        <h1>useEffect</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {(name === '123')  && <Message />}

      </>
    );
}