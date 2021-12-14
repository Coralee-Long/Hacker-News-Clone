import "./App.css";
import logo from "../src/img/HN-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
//import Card from "./components/Card";
import BasicCard from "./components/CardMaterial";
//import PaginationNews from './components/PaginationNews'
import Pagination from '@mui/material/Pagination';

const App = () => {
  const [news, setNews] = useState([]); // Set up "useState" for news
  const [page, setPage] = useState(1);  // set up "useState" for page 
  const itemsPerPage = 5;               //set how many items should be displayed per page
  const [noOfPages, setNoOfPages] = useState(0); //set up "useState" for noOfPages

  const URL = `http://hn.algolia.com/api/v1/search?tags=front_page`; // API URL


  //fetch API data
  //get method is used to fetch data from given url 
  const fetchData = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.hits);
        //set the news
        setNews(res.data.hits);
        //set no of pages to be displayed
        //if itemsPerPage = 5 and lenght of returned data is 20
        //no of pages will be 20/5...so it will show 4 pages 
        setNoOfPages(Math.ceil(res.data.hits.length / itemsPerPage));
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
    setPage(value)
  }

  return (
    <div>
      {news
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((item) => (
          <BasicCard {...item} key={item.objectID} />
        ))}

      <Pagination
        count={noOfPages}
        page={page}
        onChange={handlePageChange}
        defaultPage={1}
        color="secondary"
        size="large"
        shape='rounded'
      />

    </div>
  );
};

export default App;
