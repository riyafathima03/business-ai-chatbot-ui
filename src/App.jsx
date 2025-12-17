import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import HistoryPanel from "./components/HistoryPanel";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [activeService, setActiveService] = useState("King and Moffat");
  const [input, setInput] = useState("");

  return (
    <div className="app">
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="main">
              <Sidebar
                activeService={activeService}
                setActiveService={setActiveService}
              />
              <ChatArea
                activeService={activeService}
                input={input}
                setInput={setInput}
              />
              <HistoryPanel />
            </div>
          }
        />
        
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}
