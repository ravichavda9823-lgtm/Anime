import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Home from "./Pages/Home";
import Footer from "./common/Footer";
import Manga from "./Pages/Manga";
import Mangadetail from "./Pages/Mangadetail";
import Searchresult from "./Pages/searchResult";
import Listing from "./Pages/Listing";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import Blogdetail from "./Pages/Blogdetails";
import Signup from "./Pages/signup";
import Coming from "./Pages/Coming";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/mangadetails" element={<Mangadetail />} />
          <Route path="/searchResult" element={<Searchresult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<Blogdetail />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/coming" element={<Coming />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
