import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" />
        <Route path="/login" />
      </Route>
    </Routes>
  );
};

export default App;
