import React from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const [login, setLogin] = React.useState({});

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      })
        .then((response) => {
          if (response.ok) {
            // Data was successfully inserted
            alert("Login successful!");
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          localStorage.setItem("token", `Bearer ${data.access_token}`);
          localStorage.setItem("user", data.user.user_id);

          // Handle the response data
          console.log(data);
        });
    } catch (error) {
      console.log(`Someting went wronge ${error}`);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={login.email}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              name="password"
              value={login.password}
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
          <Grid>
            Create you account
            <Link className="login text-decoration-none" to="/register">
              {" "}
              Register
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" onClick={handleSumbit}>
              {" "}
              Login{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
