import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); // State to track login status

  const handleLogin = () => {
    // Simulate a login process, you can add your actual login logic here
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Music App
            </Typography>
          </Toolbar>
        </AppBar>
        <Dashboard />
      </div>
    );
  } else {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Music App
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh",
          }}
        >
          <h3>Login</h3>
          <Stack
            spacing={2}
            component="form"
            sx={{
              width: "25ch",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              required
              id="username"
              defaultValue="Username"
              variant="filled"
              size="small"
            />
            <TextField
              hiddenLabel
              required
              id="password"
              defaultValue="Password"
              variant="filled"
              size="small"
            />
          </Stack>

          <br></br>

          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </div>
    );
  }
}

export default App;
