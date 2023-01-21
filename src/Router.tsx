import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout/RootLayout";
import Skillset from "./pages/Skillset/Skillset";
import Plan from "./pages/Plan/Plan";
import Explore from "./pages/Explore/Explore";
import Landing from "./pages/Landing/Landing";
import AddSkills from "./pages/AddSkills/AddSkills";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<RootLayout />}>
          <Route index element={<Skillset />} />
          <Route path="add-skills" element={<AddSkills />} />
          <Route path="plan" element={<Plan />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
