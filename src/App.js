import "./App.css";
import logo from "../src/img/HN-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
//import Card from "./components/Card";
import BasicCard from "./components/CardMaterial";

const App = () => {
  const [news, setNews] = useState([]); // Set up "useState"
  const URL = `http://hn.algolia.com/api/v1/search?tags=front_page`; // API URL

  const fetchData = () => {
    axios
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

  // console.log(news);

  return (
    <div>
      {news.map((item) => (
        // <Card {...item} key={item.objectID} />
        <BasicCard {...item} key={item.objectID} />
      ))}
    </div>
  );
};

export default App;
