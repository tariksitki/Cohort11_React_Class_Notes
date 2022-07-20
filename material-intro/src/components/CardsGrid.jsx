import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import data from "../data";

export default function MultiActionAreaCard() {
  return (
    data.map((item) => {
        const {id, name, text, img} = item;
        
        return (
          <Card sx={{ maxWidth: 345 }} key={id} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {text}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary" variant="contained" >
                Share
              </Button>
            </CardActions>
          </Card>
        );
    })
  );
}
