import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import React, { useState } from "react";
const Form = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  console.log(fname, lname, email, age);
  const ages = [
    {
      value: "Select  Age",
      label: "Age"
    },
    {
      value: "18",
      label: "18"
    },
    {
      value: "19",
      label: "19"
    },
    {
      value: "20",
      label: "20"
    },
    {
      value: "21",
      label: "21"
    }
  ];

  return (
    <>
      <div>
        <Box px={3} py={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="standard-basic"
                label="firstname"
                variant="standard"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="standard-basic"
                label="lastname"
                variant="standard"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="standard-basic"
                label="email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <TextField
              id="outlined-select-currency"
              variant="standard"
              select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              helperText="Please select your age"
              fullWidth
            >
              {ages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="outlined">Submit</Button>
          </Grid>
        </Box>
      </div>

      <div>
        <Box>
          View Details
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {fname}
              </Typography>
              <Typography variant="h5" component="div">
                {lname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {age}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Form;
