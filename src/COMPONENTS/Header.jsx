import { Typography } from "@mui/material";
import { LanguageContext } from "../App";
import { useContext } from "react";
import Button from '@mui/material/Button';
import "../CSS/header.css";
const Header = ({ changeLanguage }) => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <Typography variant="h3" component="h1">
        Welcome To Latest News
      </Typography>
      <Button variant="contained" color="success" onClick={changeLanguage}>
      Language: {language === "en" ? "English" : "Spanish"}
      </Button>
    </div>
  );
};

export default Header;
