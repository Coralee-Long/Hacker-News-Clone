import { makeStyles } from "@material-ui/core/styles";
import { NoEncryptionTwoTone } from "@mui/icons-material";
import { findByLabelText } from "@testing-library/react";
import { pink } from "@material-ui/core/colors";
import { ListItemSecondaryAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 8, 0),
    height: "100%",
  },

  // toolBar: {
  //   justifyContent: "space-between",
  //   padding: "0 50px",
  // },

  card: {
    padding: "20px",
  },

  title_href: {
    textDecoration: "none",
    color: "rgba(0,0,0,0.87)",
  },

  authorStyle: {
    color: "#fb8500",
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
    color: "#fff",
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
    marginTop: "30%",
  },

  appBar: {
    backgroundColor: "#F9A620",
  },

  spinnerColor: {
    color: "#F9A620 !important",
  },

  searchAppBar: {
    // backgroundColor: "#F9A620",
    backgroundColor: "#F9A620",
    // color: "red",
  },
}));

export default useStyles;
