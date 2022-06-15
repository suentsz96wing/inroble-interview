import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Page1 } from "./Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Page2 } from "./Page2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CA07A",
    },
  },
  typography: {
    fontFamily: "Proxima Nova",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
