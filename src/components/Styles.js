import { makeStyles } from "@material-ui/core/styles";
import { NoEncryptionTwoTone } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 8, 0),
  },

  toolBar: {
    justifyContent: "space-between",
    padding: "0 50px",
  },

  card: {
    padding: "20px",
  },

  title_href: {
    textDecoration: "none",
    color: "rgba(0,0,0,0.87)",
  },

  imgWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "25px 0",
  },

  imgClass: {
    height: "80px",
    padding: "0 10px 0 0",
  },

  inputField: {
    height: "30px",
    width: "250px",
    opacity: "0.8",
    marginRight: "10px",
    borderRadius: "3px",
    border: "1px solid #ffffff",
  },

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
}));

export default useStyles;
