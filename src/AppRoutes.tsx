import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewShow from "./pages/ViewShow";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show/:showId" element={<ViewShow />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
