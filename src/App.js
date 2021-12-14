import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BasicCard from "./components/CardMaterial";
import logo from "./img/HN-logo.png";
import { Toolbar, AppBar, Typography, Container } from "@material-ui/core";
import useStyles from "./components/Styles";
import Button from "@mui/material/Button";
import { borderColor } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]); // Set up "useState"
  const URL = `http://hn.algolia.com/api/v1/search?tags=front_page`; // API URL

  const fetchData = async () => {
    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data.hits);
        setNews(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AppBar position="relative">
        <Toolbar className={classes.toolBar}>
          <div className={classes.imgWrapper}>
            <img src={logo} className={classes.imgClass} />
            <Typography variant="h4">Hacker News</Typography>
          </div>
          <form>
            <input
              type="text"
              className={classes.inputField}
              placeholder="  Search…"
            />
            <Button
              type="submit"
              variant="outlined"
              className={classes.searchButton}
              size="medium"
              style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </form>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="lg">
            {news.map((item) => (
              <div className={classes.card}>
                <BasicCard
                  {...item}
                  key={item.objectID}
                  className={classes.card}
                />
              </div>
            ))}
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
