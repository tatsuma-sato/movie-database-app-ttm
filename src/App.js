import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { HomePage, SingleMoviePage } from "./pages";
import SharedLayout from "./pages/SharedLayout";
import TrendingPage from "./pages/TrendingPage";
import qs from "query-string";

function App() {
  // const queryParams = qs.parse(location.search);
  // const newQueryParams = {
  //   ...queryParams,
  //   page: 1
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
