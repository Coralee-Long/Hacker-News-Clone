import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./Styles";
import { mapTime } from "./MapTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
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
  created_at_i,
  points,
}) {
  // const newsApiDate = created_at;
  // const timestamp = new Date(newsApiDate).getTime();
  // console.log(timestamp); // 1639484238000
  // const Day = new Date(timestamp).getDate();
  // const Month = new Date(timestamp).getMonth() + 1;
  // const Year = new Date(timestamp).getFullYear();
  // const OurNewDateFormat = `${Day}/${Month}/${Year}`;

  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275 }} raised={true} className={classes.cardMain}>
      <CardContent className={classes.cardStyling}>
        <Typography
          sx={{ fontSize: 14 }}
          className={classes.timeStyle}
          gutterBottom
        >
          {mapTime(created_at_i)} ago
        </Typography>
        <Typography variant="h5" component="div">
          <a href={url} className={classes.title_href}>
            {title}
          </a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} className={classes.authorStyle}>
          POSTED BY: {author}
        </Typography>
        <div className={classes.bottomText}>
          <CardActions className={classes.likeButtonGroup}>
            <Button size="small" className={classes.likeButton}>
              <ThumbUpIcon className={classes.like} />
            </Button>
            <Button size="small" className={classes.likeButton}>
              <ThumbDownIcon className={classes.like} />
            </Button>
          </CardActions>
          <Typography variant="body2" className={classes.commentsStyle}>
            POINTS: {points}
          </Typography>
          <Typography variant="body2" className={classes.commentsStyle}>
            COMMENTS: {num_comments}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
