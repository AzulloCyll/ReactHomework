import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  let navigate = useNavigate();

  const [userfirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const signInUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "user",
      JSON.stringify({ userfirstName, userLastName })
    );
    navigate("/airports/list");
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="form"
        sx={{
          "& > :not(style)": {
            mx: "auto",
            m: 1,
            width: "25ch",
            marginTop: "20px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="firstname"
          label="First name"
          variant="outlined"
          onChange={(event) => setUserFirstName(event.target.value)}
        />
        <TextField
          id="lastname"
          label="Last name"
          variant="outlined"
          onChange={(event) => setUserLastName(event.target.value)}
        />
        <Box sx={{ mx: "auto" }}>
          <Button variant="contained" onClick={signInUser}>
            Sign in
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPage;
