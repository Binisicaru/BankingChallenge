import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './Login.css';
import { validate } from '@babel/types';

export default function Login(props){
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");

    function validateForm(){
        return email.lenght > 0 && password.lenght > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl autoFocus 
                        type="email" 
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type = "password"
                        value= { password }
                        onChange = { e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={ !validateForm()} type="submit">Login</Button>
            </form>
        </div>
    );
}