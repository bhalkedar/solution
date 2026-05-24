import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Loader from "./components/Loader.jsx";
import { useLenis } from "./hooks/useLenis.js";

function App() {
  useLenis();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
