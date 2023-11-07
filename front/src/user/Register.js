import React from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
const Register = () => {
  const [checked, setChecked] = React.useState(true);

  const [user, setUser] = React.useState({
    f_name: "",
    l_name: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let name, value;

  const handleInput = (e) => {
    e.preventDefault();
    name = e.target.value;
    value = e.target.value;
    setUser({ ...name, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjk5MjUxMjcxLCJleHAiOjE2OTkyNTQ4NzEsIm5iZiI6MTY5OTI1MTI3MSwianRpIjoiVEVQbnJuWXBZZGF6dWZ4SyIsInN1YiI6IjE2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ESsniHiDHTEKKRihIRPEjh-wLHXedRfJgDMnbjdEIOI`,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Data was successfully inserted
        alert("Registration successful!");
      } else {
        // Handle error response
        const errorData = await response.json();
        alert("Registration failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <form action="">
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField
                label="First name"
                name="f_name"
                value={user.f_name}
                onChange={handleInput}
              ></TextField>
              <TextField
                label="Last name"
                name="l_name"
                value={user.l_name}
                onChange={handleInput}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                value={user.username}
                onChange={handleInput}
              ></TextField>
              <TextField
                label="Email"
                name="email"
                value={user.email}
                onChange={handleInput}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                name="password"
                value={user.password}
                onChange={handleInput}
              ></TextField>
              <TextField
                label="Mobile"
                name="mobile"
                value={user.mobile}
                onChange={handleInput}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={user.address}
                onChange={handleInput}
              ></TextField>
              <TextField
                label="City"
                name="city"
                value={user.city}
                onChange={handleInput}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit" onClick={handleSubmit}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Register;
