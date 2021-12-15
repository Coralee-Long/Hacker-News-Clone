import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BasicCard from "./components/CardMaterial";
import logo from "./img/HN-logo.png";
import { Toolbar, AppBar, Typography, Container } from "@material-ui/core";
import useStyles from "./components/Styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import CircularProgressWithLabel from "./components/Circular";

const App = () => {
  const classes = useStyles();
  // const [progress, setProgress] = useState(10);
  const [news, setNews] = useState([]); // Set up "useState" for news
  const [page, setPage] = useState(1); // set up "useState" for page
  const [loading, setLoading] = useState(false); //set up spinner for "loading" page
  const itemsPerPage = 5; //set how many items should be displayed per page
  const [noOfPages, setNoOfPages] = useState(0); //set up "useState" for noOfPages
  const URL = `http://hn.algolia.com/api/v1/search?tags=front_page`; // API URL

  //fetch API data
  //get method is used to fetch data from given url
  const fetchData = async () => {
    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data.hits);
        //set the news
        setNews(res.data.hits);
        setLoading(true);
        //set no of pages to be displayed
        //if itemsPerPage = 5 and length of returned data is 20
        //no of pages will be 20/5...so it will show 4 pages
        setNoOfPages(Math.ceil(res.data.hits.length / itemsPerPage));
        console.log(noOfPages);
      })
      .catch((err) => console.log(err));
  };

  //call fetch API data using useEffect
  //this will show data when page loads
  useEffect(() => {
    fetchData();
  }, []);

  //handle page change event
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className={classes.toolBar}>
          <div className={classes.imgWrapper}>
            <img
              src={logo}
              className={classes.imgClass}
              alt="Hacker News Logo"
            />
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
          {loading ? (
            <div>
              <Container maxWidth="lg">
                {news
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((item) => (
                    <div className={classes.card}>
                      <BasicCard
                        {...item}
                        key={item.objectID}
                        className={classes.card}
                      />
                    </div>
                  ))}
              </Container>
              <div className={classes.paginationContainer}>
                <Pagination
                  count={noOfPages}
                  page={page}
                  defaultPage={1}
                  onChange={handlePageChange}
                  color="secondary"
                  size="large"
                  shape="rounded"
                />
              </div>
            </div>
          ) : (
            <CircularProgressWithLabel />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
