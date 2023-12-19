import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewJoineeForm from "./pages/AddNewJoineeForm";
import ViewDeck from "./pages/ViewDeck";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<AddNewJoineeForm />} />
          <Route path="deck" element={<ViewDeck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
