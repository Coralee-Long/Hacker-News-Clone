import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./Styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  title,
  url,
  author,
  num_comments,
  created_at,
}) {
  const newsApiDate = created_at;
  const timestamp = new Date(newsApiDate).getTime();
  console.log(timestamp); // 1639484238000
  const Day = new Date(timestamp).getDate();
  const Month = new Date(timestamp).getMonth() + 1;
  const Year = new Date(timestamp).getFullYear();
  const OurNewDateFormat = `${Day}/${Month}/${Year}`;
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* {created_at.toString()} */}
          {OurNewDateFormat}
        </Typography>
        <Typography variant="h5" component="div">
          <a href={url} className={classes.title_href}>
            {title}
          </a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="primary">
          {author}
        </Typography>
        <Typography variant="body2">Comments: {num_comments}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
