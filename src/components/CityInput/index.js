import React from "react"
import { Button, Form ,Container} from 'react-bootstrap';
const CityInput=({city,setCity,error,setError,fetchCityWeather})=>{
    
    
    const handleInputChange=(event)=>{
        setCity(event.target.value);
    };
    const handleClick=()=>{
        //check if city is empty
        if(!city){
            setError("City Field is empty");
        }else{
            setError("");
            //make api call
            fetchCityWeather();
        }
    }
    // console.log("City is",city);
    return(
        <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" 
                    placeholder="Enter City"
                    value={city} 
                    onChange={handleInputChange}
                    />
                    <p className="text-danger">{error}</p>
            </Form.Group>
            <Button variant="primary"  onClick={handleClick}>
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default CityInput;