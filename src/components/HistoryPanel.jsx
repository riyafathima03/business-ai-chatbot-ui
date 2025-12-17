import React from "react";

export default function HistoryPanel() {
  return (
    <div className="history">
      <h4>Query History</h4>

      <div className="card">
        Show me total revenue for Q4
        <span>15/11/2024</span>
      </div>

      <div className="card">
        List all active projects
        <span>20/11/2024</span>
      </div>
    </div>
  );
}
