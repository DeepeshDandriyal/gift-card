import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import CoverPage from "./components/CoverPage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route key={Route.path} path="/" Component={CoverPage} />
          </Routes>
          <Routes>
            <Route key={Route.path} path="/card" Component={CardComponent} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
