import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./Pages/OnBoarding";
import Welcome from "./Pages/Welcome";
import "./Pages/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/feed" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}