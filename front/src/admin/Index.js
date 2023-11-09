import React from "react";
import Typography from "@mui/material/Typography";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Index() {
  const Items = [
    `PRODUCTS`,
    `CATEGORIES`,
    `SUB CATEGORIES`,
    `BRANDS`,
    `ORDERS`,
    `USERS`,
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Items.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item style={{ backgroundColor: `lightgray` }}>
              <h2> {index}</h2>
              {_}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
