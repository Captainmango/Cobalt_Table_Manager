import React from 'react'
import { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

function RatingComponent(props) {

    const [rating, setRating] = useState(props.rating)

    //add reservation_id to the function call as that it the prop I passed down

    return (
        <>
            <InputGroup>
                <InputGroup.Prepend>
                    <Button variant="outline-primary">Rate</Button>
                    <Button variant="danger" onClick={()=> setRating(rating > 0 ? rating - 1 : 0 )} > - </Button>
                </InputGroup.Prepend>
                <FormControl className="text-center" readOnly value={rating} onChange={(event) => setRating(event.target.value) } min="0" length="1" type="number" />
                <InputGroup.Append>
                    <Button variant="success" onClick={ () => setRating( rating < 5 ? rating + 1 : 5) }> + </Button>
                </InputGroup.Append>
            </InputGroup>
        </>

    )
}

export default RatingComponent;
