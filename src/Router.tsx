import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout/RootLayout";
import Skillset from "./pages/Skillset/Skillset";
import Plan from "./pages/Plan/Plan";
import Add from "./pages/Add/Add";
import Explore from "./pages/Explore/Explore";

const Router = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Skillset />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/add" element={<Add />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default Router;
