import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
// import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { useEffect } from "react";
// import Songs from "./pages/Songs";
// import Books from "./pages/Books";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/Notfound";
// import Blogs from "./pages/Blogs";
// import Podcasts from "./pages/Podcasts";

// const Header = lazy(() => import("./components/Header/Header"));
// const Footer = lazy(() => import("./components/Footer/Footer"));
// const Home = lazy(() => import("./pages/Home"));
// const Songs = lazy(() => import("./pages/Songs"));
// const Books = lazy(() => import("./pages/Books"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Loading = lazy(() => import("./pages/Loading"));
// const NotFound = lazy(() => import("./pages/Notfound"));

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        {/* <Suspense fallback={""}> */}
        {/* </Suspense> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
