import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InternTablePage from "./pages/InternTablePage";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<InternTablePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
