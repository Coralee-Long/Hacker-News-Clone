import { makeStyles } from "@material-ui/core/styles";
import { NoEncryptionTwoTone } from "@mui/icons-material";
import { findByLabelText } from "@testing-library/react";
import { pink } from "@material-ui/core/colors";
import { ListItemSecondaryAction } from "@material-ui/core";
import { purple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#dad7cd",
      fontSize: "18px",
      backgroundColor: "rgba(39, 41, 61, 0.8)",
      padding: "25px",
      margin: "5px",
    },
  },

  mainAppContainer: {
    // height: "100vh !important",
    backgroundColor: "rgba(28, 29, 39, 1)",
  },

  wrapper: {
    backgroundColor: "rgba(28, 29, 39, 1)",
    height: "100vh !important",
  },

  card: {
    padding: "15px",
    backgroundColor: "rgba(28, 29, 39, 1)",
  },

  cardStyling: {
    padding: "20px 10px 15px 20px !important",
  },

  cardMain: {
    borderRadius: "15px !important",
    backgroundColor: "rgba(39, 41, 61, 0.9) !important",
    padding: "0 10px",
  },

  title_href: {
    textDecoration: "none",
    color: "#dad7cd",
  },

  authorStyle: {
    color: "#f08080",
    paddingTop: "10px",
    paddingBottom: "20px",
  },

  timeStyle: {
    color: "#9a8c98",
    paddingBottom: "10px",
    paddingTop: "5px",
  },

  commentsStyle: {
    color: "#ffb4a2",
    paddingTop: "20px",
    paddingRight: "15px",
    paddingLeft: "10px",
  },

  bottomText: {
    display: "flex",
  },

  like: {
    color: "#ffb4a2",
    opacity: "0.8",
  },

  likeButton: {
    margin: "0 !important",
  },

  likeButtonGroup: {
    paddingBottom: "0",
  },

  imgWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "25px 0",
  },

  imgClass: {
    height: "70px",
    padding: "0 10px 0 0",
  },

  searchButton: {
    color: "##dad7cd",
    height: "35px",
    opacity: "0.7",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },

  spinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // marginTop: "40%",
  },

  spinnerColor: {
    color: "#f08080 !important",
  },

  searchAppBar: {
    backgroundColor: "rgba(39, 41, 61, 1)",
    color: "#dad7cd",
    paddingRight: "8% !important",
    paddingLeft: "8% !important",
    paddingTop: "15px",
    paddingBottom: "15px",
  },

  noRecordsContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    backgroundColor: "rgba(28, 29, 39, 1)",
    color: "#dad7cd",
  },
}));

export default useStyles;
