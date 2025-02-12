import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import { APP_FOLDER_NAME } from "./globals";


const App = () => {
  return (
    <Router basename={`/${APP_FOLDER_NAME}`}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
