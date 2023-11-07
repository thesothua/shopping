import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserProfile() {
  const [open, setOpen] = React.useState(false);
  let token = localStorage.getItem("token");

  const [user , setUser] = useState({
    f_name : "", l_name: "" , address: "", email: "" , mobile : ""
  });


  const handleOpen = () => {
    setOpen(true);

    const getUser = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setUser({
            f_name : data.f_name,
            l_name : data.l_name,
            username : data.username,
            address : data.address,
            mobile : data.mobile,
          });
        });
    };
    getUser();
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{user.username}</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${user.f_name} ${user.l_name}`}
                </Typography>
                  <p>{user.username}</p>
                <Typography variant="body2" color="text.secondary">
                  {`${user.address}`} <br />
                  {`Mobile - ${user.mobile}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
