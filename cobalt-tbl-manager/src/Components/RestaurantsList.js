import React from 'react'
import { connect } from 'react-redux'
import Restaurant from './Restaurant'
import Spinner from '../icons/Spinner.svg'
import Container from 'react-bootstrap/Container'


const RestaurantsList = (props) => {
    
    return (
        <div>
            <Container className="p-3">

                    { props.restaurants && props.restaurants.length > 0 ? 
                        props.restaurants.map((restaurant, index) => <Restaurant
                            key={index}
                            id={index}
                            img = {restaurant.img} 
                            address={restaurant.address}
                            name={restaurant.name}
                            rating={restaurant.rating} 
                        />)

                    : <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div><img src={Spinner} alt="spinner" /></div>
                    </div>}
                
            
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    user: state.users.user

    
})


export default connect(mapStateToProps)(RestaurantsList);
