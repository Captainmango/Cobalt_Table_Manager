import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

const Flash = () => {
  
//use FlashMessage package to wrap the alert and use same syntax. Maybe break visibility state into Redux?

    return (
        <FlashMessage>
            <Alert style={{position: 'fixed', width: '100%'}} variant={messages.alertType} onClose={ () => { setVisibility(false) } } dismissible transition>
                <Alert.title>{messages.title}</Alert.title>
                <p>{messages.message}</p>
            </Alert>
        </FlashMessage>
    )
}

const mapStateToProps = (state) => (
    {
        messages: state.flashMessages
    }
)

export default connect(mapStateToProps)(Flash);