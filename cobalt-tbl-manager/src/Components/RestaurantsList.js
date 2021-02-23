import React from 'react'
import { connect } from 'react-redux'
import Location from './Restaurant'
import Spinner from '../icons/Spinner.svg'
import Container from 'react-bootstrap/Container'

const RestaurantsList = (props) => {
    
    return (
        <div>
            <Container>

                    { props.restaurants && props.restaurants.length > 0 ? 
                        props.restaurants.map((restaurant, index) => <Restaurant
                            key={index}
                            id={index}
                            img = {restaurant.attributes.img} 
                            address={restaurant.attributes.address}
                            name={restaurant.attributes.name}
                            rating={restaurant.attributes.rating} 
                        />)

                    : <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div><img src={Spinner} alt="spinner" /></div>
                    </div>}
                
            
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myLocations: state.locations.myLocations,
    user: state.users.user

    
})


export default connect(mapStateToProps)(RestaurantsList);
