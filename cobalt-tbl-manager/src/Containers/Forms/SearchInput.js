import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.searchRestaurants(searchTerm);
        setSearchTerm("");
        
    }

    return (
        <div className="m-5">
            <Form className="mx-auto">
                <Form.Row className="justify-content-lg-center">
                    <Col lg={{span: 7, offset: 2}} xs={{span: 9}}>
                        <Form.Control onChange={(event) => {setSearchTerm(event.target.value)}} type="text" placeholder="Search restaurants here" />
                    </Col>
                    <Col>
                        <Button variant="warning" type="submit" onClick={(event) => { handleOnSubmit(event)}}>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default SearchInput
