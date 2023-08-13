import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import OnlineModeCard from "./OnlineModeCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard() {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(2);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const newNotifications = [];
  
    if (!online) {
      newNotifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
    }
    if (volume > 80) {
      newNotifications.push("Listening to music at a high volume could cause long-term hearing loss.");
    }
    if (quality === 1) {
      newNotifications.push("Music quality is degraded. Increase quality if your connection allows it.");
    }
  
    if (online) {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => !notification.includes("offline"))
      );
    } else {
      setNotifications(newNotifications);
    }
  }, [online, volume, quality]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ marginTop: "16px" }}
    >
      <Grid item>
        <OnlineModeCard online={online} setOnline={setOnline} />
      </Grid>
      <Grid item>
        <MasterVolumeCard volume={volume} setVolume={setVolume} />
      </Grid>
      <Grid item>
        <SoundQualityCard quality={quality} setQuality={setQuality} />
      </Grid>
      <Grid item xs={12}>
        <div>
          <h1>Notifications:</h1>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
