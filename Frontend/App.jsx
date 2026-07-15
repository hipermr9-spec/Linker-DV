import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import OnBoarding from "./Pages/OnBoarding";
import Feed from "./Pages/Feed";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div 
            initial={{ x: 0 }} 
            exit={{ x: "-100%" }} 
            transition={{ duration: 0.5 }}
          >
            <OnBoarding />
          </motion.div>
        } />
        <Route path="/feed" element={
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Feed />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}