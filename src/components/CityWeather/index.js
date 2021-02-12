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
                    <h3 style={{textTransform:"capitalize"}}>Weather:{weather.description}</h3>
                </div>
                <div>
                    <h3>Temperature:{main.temp.toFixed(2)+" K "}, {(main.temp-273.15).toFixed(2) +" C "}</h3>
                    <h3>Humidity:{main.humidity}</h3>
                    <h3>Sea Level:{!main.sea_level?"Information Not Available":main.sea_level.toFixed(2)}</h3>
                </div>
            </Container>
        </>
    )}else{
        return(<></>)
    }
}

export default CityWeather;

