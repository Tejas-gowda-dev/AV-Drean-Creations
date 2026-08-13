import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FilmsPage from "./pages/FilmsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const changeRoute = (route: string) => {
    switch (route) {
      case "home":
        navigate("/");
        break;

      case "about":
        navigate("/about");
        break;

      case "films":
        navigate("/films");
        break;

      case "gallery":
        navigate("/gallery");
        break;

      case "question":
        navigate("/question");
        break;

      case "contact":
        navigate("/contact");
        break;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentRoute =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace("/", "");

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">

      <Navbar
        currentRoute={currentRoute}
        onChangeRoute={changeRoute}
      />

      <main className="flex-grow">

        <Routes>

          <Route
            path="/"
            element={<Home onNavigate={changeRoute} />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/films"
            element={<FilmsPage />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/question"
            element={<QuestionPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>

      </main>

      <Footer onNavigate={changeRoute} />

      <WhatsAppFloating />

    </div>
  );
}