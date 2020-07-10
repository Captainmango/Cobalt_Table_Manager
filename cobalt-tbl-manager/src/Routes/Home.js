import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CobaltModal from '../Components/CobaltModal';



const Home = () => {
    return (
        <Jumbotron>
            <h1> Welcome to Cobalt Table Manager</h1>
            <p>
                This app is a simple client side routing application that allows you, a restaurant chain owner, 
                to see the bookings that are taking place at your tables in the different locations you run. You can see the tables,
                locations and bookings by using the options on the top right of the screen. Making an account is simple, just click the button
                below to get started.
            </p>

            <CobaltModal />
        </Jumbotron>
    )
}



export default Home;