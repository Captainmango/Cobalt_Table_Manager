import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllRestaurants } from '../Actions/restaurantsActions';
import Spinner from '../icons/Spinner.svg';

export const RestaurantsContainer = (props) => {
    
    useEffect((props) => {
      props.fetchAllRestaurants();
    }, [])


    const handleLoading = () => {
        if(props.requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <>{ props.children }</>
      
        }
      }
        return (
          
            <div>
                <h1>My Locations</h1>
                <br />
                { handleLoading() }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
    restaurants: state.restaurants.restaurants,
    user: state.users.user,
    requesting: state.restaurants.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchAllRestaurants: () => {dispatch(fetchAllRestaurants())}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
