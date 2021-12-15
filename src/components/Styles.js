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
      backgroundColor: "rgba(39, 41, 61, 0.8)",
    },
  },

  mainAppContainer: {
    height: "100vh !important",
    backgroundColor: "rgba(28, 29, 39, 1)",
  },

  wrapper: {
    backgroundColor: "rgba(28, 29, 39, 1)",
    height: "100vh !important",
  },
  // toolBar: {
  //   justifyContent: "space-between",
  //   padding: "0 50px",
  // },

  card: {
    padding: "15px",
    backgroundColor: "rgba(28, 29, 39, 1)",
  },

  cardMain: {
    borderRadius: "15px !important",
    backgroundColor: "rgba(39, 41, 61, 0.9) !important",
    padding: "0 10px",
  },

  // cardStyling: {
  //   backgroundColor: "rgba(39, 41, 61, 0.9)",
  // },

  title_href: {
    textDecoration: "none",
    color: "#dad7cd",
  },

  authorStyle: {
    color: "#f08080",
    paddingTop: "10px",
  },

  timeStyle: {
    color: "#9a8c98",
    paddingBottom: "10px",
    paddingTop: "5px",
    // textAlign: "right",
  },

  commentsStyle: {
    color: "#ffb4a2",
    paddingTop: "20px",
    paddingRight: "30px",
  },

  bottomText: {
    display: "flex",
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

  // inputField: {
  //   height: "30px",
  //   width: "250px",
  //   opacity: "0.8",
  //   marginRight: "10px",
  //   borderRadius: "3px",
  //   border: "1px solid #ffffff",
  // },

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
    height: "100%",
    minHeight: "400px",
    // backgroundColor: "#A8D5E2",
    marginTop: "40%",
  },

  // appBar: {
  //   backgroundColor: "#F9A620",
  // },

  spinnerColor: {
    color: "#f08080 !important",
  },

  searchAppBar: {
    // backgroundColor: "#F9A620",
    backgroundColor: "rgba(39, 41, 61, 1)",
    color: "#dad7cd",
    paddingRight: "70px !important",
    paddingLeft: "70px !important",
  },
}));

export default useStyles;
