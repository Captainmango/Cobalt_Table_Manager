import React from 'react';
import { connect } from 'react-redux';
import { fetchMyLocations } from '../Actions/locationsActions';
import LocationsTable from '../Components/LocationsTable';
import Spinner from '../icons/Spinner.svg';

export class LocationsContainer extends React.Component {

    componentDidMount() {
        let user_id = this.props.user.id
        this.props.fetchMyLocations(user_id)
      }
      


      handleLoading = () => {
        if(this.props.requesting) {
          return <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div><img src={Spinner} alt="spinner" /></div>
            </div>
          </>
        } else {
          return <LocationsTable />
        }
      }
    render() {
        return (
          
            <div>
                <h1>My Locations</h1>
                <br />
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    locations: state.locations.locations,
    user: state.users.user,
    requesting: state.locations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchMyLocations: (user_id) => {dispatch(fetchMyLocations(user_id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);