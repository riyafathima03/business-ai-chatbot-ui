import React from "react";
import "./../styles/admin.css";

export default function UserModal({ title, user, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{title}</h3>

        <input placeholder="Name" defaultValue={user?.name || ""} />
        <input placeholder="Email" defaultValue={user?.email || ""} />

        <select defaultValue={user?.role || "User"}>
          <option>User</option>
          <option>Admin</option>
        </select>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="primary-btn">Save</button>
        </div>
      </div>
    </div>
  );
}
