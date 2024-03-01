import Grid from "@mui/material/Grid";
import CardComponent from "./COMPONENTS/CardComponent";
import "./CSS/App.css";
import { createContext, useEffect, useState } from "react";
import OptionComponent from "./COMPONENTS/OptionsComponent";
import Header from "./COMPONENTS/Header";
import PageOptionComponent from "./COMPONENTS/PageOptionComponent";
import ShortBy from "./COMPONENTS/ShortBy";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const LanguageContext = createContext("en");
const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [language, setLanguage] = useState("en");
  const [showLoader, setShowLoader] = useState(true);
  const [showCategory, setShowCategory] = useState("sports");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("publishedAt");
  //console.log(showCategory);

  function selectShotBy(event) {
    //console.log(event.target.value);
    setShowLoader(true);
    setSortBy(event.target.value);
  }

  function changeCategoryOnClick(category) {
    //console.log(category)
    setShowLoader(true);
    setShowCategory(category);
  }

  function changeLanguage() {
    setShowLoader(true);
    if (language === "en") {
      // setLanguage(false);
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }

  function handlePageChange(event, value) {
    window.scrollTo(0, 0);
    setShowLoader(true);
    setPage(value);
  }

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${showCategory}&page=${page}&sortBy=${sortBy}&apiKey=c02006001938408eb8a78787a5899a82&pageSize=15&language=${language}`
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        setShowLoader(false);
        //console.log(data)
        return setNewsList(data.articles);
      });
  }, [language, showCategory, page, sortBy]);

  return (
    <div className="main-container">
      <LanguageContext.Provider value={language}>
        {showLoader ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showLoader}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          ""
        )}
        <Header changeLanguage={changeLanguage} />
        {/* <Typography variant="h1">See latest news</Typography> */}
        <OptionComponent changeCategoryOnClick={changeCategoryOnClick} />
        <ShortBy selectShotBy={selectShotBy} sortBy={sortBy} />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {newsList.map((listNews, index) => (
            <Grid
              className="inner-grid-compo"
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
            >
              {" "}
              <CardComponent listNews={listNews} />
            </Grid>
          ))}
        </Grid>
        <PageOptionComponent handlePageChange={handlePageChange} />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
