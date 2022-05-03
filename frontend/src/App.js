// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePageRef/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePageYouTube from "./pages/HomePageYouTube/HomePageYouTube";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import IndividualVideoPage from "./pages/IndividualVideoPage/IndividualVideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageYouTube />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/watch" element={<IndividualVideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
