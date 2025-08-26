import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
