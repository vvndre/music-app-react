import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SoundQualityCard({ quality, setQuality }) {
  const handleQualityChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <br></br>
        <Typography variant="body2">Manually control audio quality </Typography>
        <Typography variant="body2">in event of poor connection</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ m: 1, minWidth: 60 }} size="small">
          <FormControl fullWidth>
            <InputLabel id="demo-select-small-label">Quality</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={quality}
              label="Quality"
              onChange={handleQualityChange}
              sx={{ fontSize: "0.75rem" }} // Adjust the font size as needed
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardActions>
    </Card>
  );
}

export default SoundQualityCard;
