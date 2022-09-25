import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Glory from "./Glory";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="weather-app">
      <div className="container">
        <Glory />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  </StrictMode>
);
