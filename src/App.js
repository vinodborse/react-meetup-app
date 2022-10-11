import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoratiesPage from "./pages/Favorities";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favoraties" element={<FavoratiesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
