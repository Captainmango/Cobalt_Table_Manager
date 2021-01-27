import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Bus from '../utils/Bus';

const Flash = () => {
  
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [title, setTitle] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({ message, title, type }) => {
            setVisibility(true);
            setMessage(message);
            setTitle(title);
            setType(type);
        });
                

    }, []);
//use FlashMessage package to wrap the alert and use same syntax. Maybe break visibility state into Redux?

    return (
        visibility && <Alert style={{position: 'fixed', width: '100%'}} variant={type} onClose={ () => { setVisibility(false) } } dismissible>
            <Alert.title>{title}</Alert.title>
            <p>{message}</p>
        </Alert>
    )
}

export default Flash;