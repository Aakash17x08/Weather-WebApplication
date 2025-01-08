import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const InfoBox = ({ info }) => {
  const img_url =
    "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const Hot_Url =
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
  const Rain_Url =
    "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  const Cold_url =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2ludGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <h1>Weather-Info: {info.description}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? Rain_Url
                : info.temp > 15
                ? Hot_Url
                : Cold_url
            }
            title="weather image"
          />
          <CardContent>
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
