import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import {
  DiscoverPage,
  HomePage,
  SearchResultsPage,
  SingleMoviePage,
} from "./pages";
import SharedLayout from "./pages/SharedLayout";
import TrendingPage from "./pages/TrendingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
