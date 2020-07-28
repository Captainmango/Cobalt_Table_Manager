import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchAllLocations } from '../../Actions/locationsActions'
import { postBooking } from '../../Actions/bookingsActions'
import { LocationOption } from '../../Components/LocationOption';
import Spinner from '../../Spinner.svg'

export class BookingInput extends React.Component {

    state = {
        user: "",
        location:"",
        table: "",
        datetime:"",
        number_of_diners:"",
        notes: ""
    }

    componentDidMount() {
       this.props.fetchAllLocations()
    }


    addLocations = (locations) => {
       return locations.map((location, index) => 
            <LocationOption value={location.id} name={index} />
       )
        
    }

    handleOnChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.createBooking(this.state);
        this.setState({
            user: "",
            location:"",
            table: "",
            datetime:"",
            number_of_diners:"",
            notes: ""
        });
    }
       

    render() {
        if(this.props.requesting) {
            return <>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <div><img src={Spinner} alt="spinner" /></div>
              </div>
            </>
          } else {
        return (
            <div>
        <Container>
        <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}><h1 className="text-center">New Booking Form</h1></Col>
        </Row>
        <br/>
        <br/>
         <Form>

      <Form.Group controlId = "formBasicLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control onChange={event => this.handleOnChange(event)} name="location" as="select" defaultValue="Choose your location">
                  {this.addLocations(this.props.locations)}
              </Form.Control> 
          </Form.Group> 

          
          <Button variant="primary" type="submit" onClick={this.handleOnSubmit.bind(this)}>
              Submit
          </Button>
          </Form>
      </Container>
  </div>
        
            
        )
    }}
}

const mapStateToProps = (state) => {
    return {
    locations: state.locations.locations[0],
    user: state.users.user,
    requesting: state.locations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchAllLocations: () => {dispatch(fetchAllLocations())},
    createBooking: (user_id, booking) => {dispatch(postBooking(user_id, booking))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingInput);
