import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Bus from '../utils/Bus';

const Flash = (title, message, alertType) => {
  
    let [visibility, setVisibility] = useState(false);
//use FlashMessage package to wrap the alert and use same syntax. Maybe break visibility state into Redux?

    return (
        visibility && <Alert style={{position: 'fixed', width: '100%'}} variant={alertType} onClose={ () => { setVisibility(false) } } dismissible>
            <Alert.title>{title}</Alert.title>
            <p>{message}</p>
        </Alert>
    )
}

export default Flash;