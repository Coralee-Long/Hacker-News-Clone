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
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const classes = useStyles();
  // const [progress, setProgress] = useState(10);
  const [news, setNews] = useState([]); // Set up "useState" for news
  const [page, setPage] = useState(1); // set up "useState" for page
  const [loading, setLoading] = useState(false); //set up spinner for "loading" page
  const itemsPerPage = 6; //set how many items should be displayed per page
  const [noOfPages, setNoOfPages] = useState(0); //set up "useState" for noOfPages
  const [query, setQuery] = useState(""); //set up "useState" for query
  const [search, setSearch] = useState("");
  const URL = `http://hn.algolia.com/api/v1/search?tags=front_page`; // API URL
  const searchURL = `http://hn.algolia.com/api/v1/search?query=${query}`; //search URL

  //fetch API data
  //get method is used to fetch data from given url
  const fetchData = async (url) => {
    //console.log("Our URL:" + url);
    await axios.get(url).then((res) => {
      //set the news
      setNews(res.data.hits);
      //set no of pages to be displayed
      //if itemsPerPage = 5 and length of returned data is 20
      //no of pages will be 20/5...so it will show 4 pages
      setNoOfPages(Math.ceil(res.data.hits.length / itemsPerPage));
      // if (res.data.hits.length > 0) {
      setLoading(true);
      // }
    });
    // .catch((err) => alert(`Error at server side....Please try again${err}`));
  };

  //call fetch API data using useEffect
  //this will show data when page loads
  useEffect(() => {
    fetchData(URL);
  }, []);

  useEffect(() => {
    fetchData(searchURL);
  }, [query]);

  //handle page change event
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearch(query);
  //   console.log("Search URL" + searchURL);
  //   console.log("Query" + query);
  //   // setQuery("");
  // };

  return (
    <div>
      <SearchAppBar
        query={query}
        setQuery={setQuery}
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        // type="text"
        // className={classes.inputField}
        // placeholder=" Search…"
        // name="txtSearch"
      ></SearchAppBar>
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
                  hidePrevButton
                  hideNextButton
                  paging={false}
                  className={classes.pagStyle}
                  count={noOfPages}
                  page={page}
                  defaultPage={0}
                  onChange={handlePageChange}
                  size="large"
                  shape="rounded"
                  color="standard"
                />
              </div>
            </div>
          ) : (
            <div className={classes.spinner}>
              <CircularProgressWithLabel />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
