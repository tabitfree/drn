import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//app components
import ScrollToTop from "./components/ScrollToTop";
import App from "./components/App";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
//fonts
import "./assets/fonts/Karla-Bold.ttf";
import "./assets/fonts/Karla-Regular.ttf";
import "./assets/fonts/Karla-SemiBold.ttf";
import "./assets/fonts/IBMPlexSerif-Regular.ttf";
import "./assets/fonts/IBMPlexSerif-SemiBold.ttf";

ReactDOM.render(
  <BrowserRouter basename="/">
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
