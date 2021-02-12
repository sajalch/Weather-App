import React from "react"
import logo from './logo.svg';
import './App.css';
import CityInput from "./components/CityInput"
import CityWeather from "./components/CityWeather"
function App() {
  const [city,setCity]=React.useState("");
  const [error,setError]=React.useState("");
  const [cityWeather,setCityWeather]=React.useState([]);
  const fetchCityWeather=()=>{
    setCityWeather([]);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5d4a075adc7f5322bb6ae9ec6c87c67`
      ).then((response)=>response.json()
      .then((result)=>{
           if(result.cod===200)
            setCityWeather(result);
          else{
            setError("Please Enter a Valid City Name");
          }
      })
      ).catch((error)=>setError("Some problem Occuered while fetching"));
  }
  return (
    <>
    <CityInput city={city} 
              setCity={setCity}
              error={error}
              setError={setError}
              fetchCityWeather={fetchCityWeather}
          />
    <CityWeather cityWeather={cityWeather}/>
    </>
  );
}

export default App;
