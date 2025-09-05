import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let fetchWeather = async() => {
        try{
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                    city: city,
                    feels_like: data.main.feels_like,
                    humidity: data.main.humidity,
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    weather: data.weather[0].description,
            }
            return result;
        }catch(err) {
            throw err;
        }
    }


    let handleInput = (event) => {
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit = async (event) => {
       try{
            event.preventDefault();
            let newInfo = await fetchWeather();
            updateInfo(newInfo);
            setCity("");
       }catch(err){
        setError(true);
       }
    }
    return (
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cityName">Enter city</label><br />
                <TextField id="cityName" label="City" type="text" variant="outlined" value={city} onChange={handleInput} required/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                <br /><br />
                {error && <h4 style={{color: "red"}}>No such place exists!</h4>}
            </form>
        </div>
    );
}