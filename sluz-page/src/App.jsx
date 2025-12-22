import { Routes, Route, Navigate } from "react-router-dom";
import CityPage from "./pages/CityPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/krakow" replace />} />
      <Route path="/:city" element={<CityPage />} />
    </Routes>
  );
}

export default App;
