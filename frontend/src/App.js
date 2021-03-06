// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePageYouTube from "./pages/HomePageYouTube/HomePageYouTube";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import IndividualVideoPage from "./pages/IndividualVideoPage/IndividualVideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageYouTube />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/watch" element={<IndividualVideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
