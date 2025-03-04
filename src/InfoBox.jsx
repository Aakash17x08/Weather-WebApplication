import { useEffect } from "react";
import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const InfoBox = ({ info }) => {
  const Hot_Url =
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_Url =
    "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  const Cold_url =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2ludGVyfGVufDB8fDB8fHww";

  // Determine the background image based on weather conditions
  const backgroundImage =
    info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_url;

    //backgroung
    const Hot_bg =
    "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_bg =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_bg =
    "https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const bodyImage =
    info.humidity > 80 ? Rain_bg : info.temp > 15 ? Hot_bg : Cold_bg;


  // Use useEffect to set the body's background image dynamically
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bodyImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    
    return () => {
      document.body.style.backgroundImage = ""; // Reset on unmount
    };
  }, [backgroundImage]); // Runs when backgroundImage changes

  return (
    <div className="InfoBox">
      <h1>Weather-Info: {info.description}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={backgroundImage}
            title="weather image"
          />
          <CardContent style={{ backgroundColor: "#F5F5F5" }}>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temperature: {info.tempMin}°C</p>
              <p>Max Temperature: {info.tempMax}°C</p>
              <p>Feels Like: {info.feelsLike}°C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { InfoBox };
