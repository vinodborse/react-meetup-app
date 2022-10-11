import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoratiesPage from "./pages/Favorities";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favoraties" element={<FavoratiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
