import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ Info }) {
  const COLD_URL =
    "https://images.unsplash.com/photo-1546999441-5986497a3312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1470956686/photo/rainy-day-outside.webp?a=1&b=1&s=612x612&w=0&k=20&c=quPEkjlEhuFNjgyC4lCP2341yykICwk-SnhyzqT8Pr8=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_URL
                : Info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}
              {
              Info.humidity > 80
                ? <ThunderstormIcon/>
                : Info.temp > 15
                ? <SunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {Info.temp}&deg;C</p>
              <p>Humidity = {Info.humidity}</p>
              <p>Min Temp = {Info.tempMin}&deg;C</p>
              <p>Max Temp = {Info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <b>{Info.weather}</b> and feels
                like {Info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
