import { useState } from "react";
import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }){

    return (
        <>
        <h2>WeatherInfo - {info.weather}</h2>
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 250, width: 420 }}
                    image={info.humidity > 80 ? "./public/rainyWeather.png" : (info.temp > 27) ? "./public/hotTemp.png" : "./public/coldTemp.png"}
                    title= {info.city}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? <i class="fa-solid fa-umbrella"></i> : (info.temp > 27) ? <i class="fa-solid fa-sun"></i> : <i class="fa-regular fa-snowflake"></i>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.temp_min}&deg;C</p>
                        <p>Max Temp = {info.temp_max}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and<br />feels like {info.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    );
}