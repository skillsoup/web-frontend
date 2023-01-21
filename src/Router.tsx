import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout/RootLayout";
import Skillset from "./pages/Skillset/Skillset";
import Plan from "./pages/Plan/Plan";
import Explore from "./pages/Explore/Explore";
import Landing from "./pages/Landing/Landing";
import Onboard from "./pages/Onboard/Onboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="onboard" element={<Onboard />} />
        <Route path="/profile" element={<RootLayout />}>
          <Route path="skillset" element={<Skillset />} />
          <Route path="plan" element={<Plan />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
