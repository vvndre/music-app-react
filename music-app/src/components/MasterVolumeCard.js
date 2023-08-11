import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function MasterVolumeCard() {
  const [volume, setVolume] = useState(20); // State to track volume

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue); // Update the volume state when slider value changes
  };

  return (
    <Card>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <br></br>
        <Typography variant="body2">Overrides all other sound </Typography>
        <Typography variant="body2">settings in this application</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: 300, paddingLeft: 2, paddingRight: 2 }}>
          <Slider
            aria-label="Volume"
            value={volume} // Reflect the volume state
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />
        </Box>
      </CardActions>
    </Card>
  );
}

export default MasterVolumeCard;
