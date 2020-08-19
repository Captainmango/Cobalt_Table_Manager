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
        user_id: this.props.user.id,
        location:"",
        datetime:"",
        number_of_diners:"",
        notes: ""
    }

    componentDidMount() {
       this.props.fetchAllLocations()
    }


    handleOnChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleOnSubmit(event) {
        event.preventDefault();
        console.log(5)
        this.props.createBooking(this.props.user.id, this.state);
        console.log(6)
        this.setState({
            user_id: this.props.user.id,
            location:"",
            datetime:"",
            number_of_diners:"",
            notes: ""
        });
        console.log(7)
    }
       

    render() {
        console.log(8)
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
                  {this.props.locations && this.props.locations.length > 0 ?
                  this.props.locations.map((location, index) => 
                  <LocationOption key={index} value={location.id} name={location.attributes.name} />) :
                <option>Loading options</option>}
              </Form.Control> 
          </Form.Group>

          <Form.Group controlId="formBasicDateTime">
            <Form.Label>Date/ Time</Form.Label>
            <Form.Control value={this.state.datetime} onChange={event => this.handleOnChange(event)} name="datetime" type="datetime-local" />
        </Form.Group>

        <Form.Group controlId="formBasicDiners">
            <Form.Label>Diners</Form.Label>
            <Form.Control value={this.state.number_of_diners} onChange={event => this.handleOnChange(event)} name="number_of_diners" type="number" min="0" step="1" />
        </Form.Group>

        <Form.Group controlId="formBasicDiners">
            <Form.Label>Notes</Form.Label>
            <Form.Control value={this.state.notes} onChange={event => this.handleOnChange(event)} name="notes" as="textarea" rows="5" />
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
    locations: state.locations.locations,
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
