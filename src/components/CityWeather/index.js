import React from "react"
import { Button, Form ,Container} from 'react-bootstrap';

  const CityWeather=({cityWeather})=>{
    const weather={...{...cityWeather.weather}[0]};
    const main={...{...cityWeather.main}};
    // console.log(JSON.stringify(cityWeather)==="[]");
    if(JSON.stringify(cityWeather)!=="[]"){
    return(
        <>
            <Container>
                <div>
                <h3>City Name:{cityWeather.name}</h3>
                    <h3>Weather:{weather.description}</h3>
                </div>
                <div>
                    <h3>Temperature:{main.temp}</h3>
                    <h4>Humidity:{main.humidity}</h4>
                    <h4>Sea Level:{main.sea_level}</h4>
                </div>
            </Container>
        </>
    )}else{
        return(<></>)
    }
}

export default CityWeather;

