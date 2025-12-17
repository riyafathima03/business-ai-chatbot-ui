import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <div className="right-icons">
        <span onClick={() => navigate("/settings")} className="icon">⚙️</span>
        <span onClick={() => navigate("/admin")} className="admin-link">
          Admin
        </span>
      </div>
    </div>
  );
}
