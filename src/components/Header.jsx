import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div>
        <div className="title">AI Support Assistant</div>
        <div className="subtitle">Powered by Advanced Analytics</div>
      </div>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/settings")}
        >
          ⚙️
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/admin")}
        >
          Admin
        </span>
      </div>
    </div>
  );
}
