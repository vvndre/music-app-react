import React from "react";
import Grid from "@mui/material/Grid";
import OnlineModeCard from "./OnlineModeCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ marginTop: "16px" }}
    >
      <Grid item>
        <OnlineModeCard />
      </Grid>
      <Grid item>
        <MasterVolumeCard />
      </Grid>
      <Grid item>
        <SoundQualityCard />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
