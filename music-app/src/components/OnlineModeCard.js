import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

function OnlineModeCard() {
  const [online, setOnline] = useState(false); // State to track online status

  const handleSwitchChange = () => {
    setOnline(!online); // Toggle the online status
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2">Is this application connected</Typography>
        <Typography variant="body2">to the internet?</Typography>
      </CardContent>
      <div>
        <Switch checked={online} onChange={handleSwitchChange} />
      </div>
    </Card>
  );
}

export default OnlineModeCard;
