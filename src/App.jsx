import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
import { useEffect } from "react";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Loading = lazy(() => import("./pages/Loading"));
const NotFound = lazy(() => import("./pages/Notfound"));

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
