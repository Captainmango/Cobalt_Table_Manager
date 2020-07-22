import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../Actions/locationsActions';
import LocationsTable from '../Components/LocationsTable';
import Spinner from '../Spinner.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class LocationsContainer extends React.Component {

    componentDidMount() {
        let user_id = this.props.user.id
        this.props.fetchLocations(user_id)
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
    locations: state.locations,
    user: state.users.user,
    requesting: state.locations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchLocations: (user_id) => {dispatch(fetchLocations(user_id))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);
