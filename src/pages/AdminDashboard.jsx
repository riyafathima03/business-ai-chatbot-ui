
import { useNavigate } from "react-router-dom";
import "./../styles/admin.css";
import React, { useState } from "react";
import UserModal from "../components/UserModal";


export default function AdminDashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);


  return (
    <div className="admin-page">

      {/* ✅ SINGLE HEADER (correct) */}
      <div className="admin-header">
        <div className="admin-title">
          <span
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ←
          </span>

          <div className="admin-icon">🛡️</div>
          <div>
            <h2>Admin Dashboard</h2>
            <p>Manage your AI chatbot system</p>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="stats-grid">
        <StatCard title="Total Users" value="1,247" icon="👤" />
        <StatCard title="Active Sessions" value="342" icon="📈" />
        <StatCard title="Total Queries" value="15,893" icon="💾" />
        <StatCard title="Avg Response Time" value="1.2s" icon="📊" />
      </div>

      {/* User Management */}
      <div className="card">
        <div className="card-header">
          <h3>User Management</h3>
          <button
            className="primary-btn"
            onClick={() => alert("Add User")}
          >
           <button
  className="primary-btn"
  onClick={() => {
    setEditingUser(null);
    setShowModal(true);
  }}
>
  Add User
</button>

            
          </button>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <UserRow
              name="John Doe"
              email="john@example.com"
              role="Admin"
              status="Active"
            />
            <UserRow
              name="Jane Smith"
              email="jane@example.com"
              role="User"
              status="Active"
            />
            <UserRow
              name="Mike Johnson"
              email="mike@example.com"
              role="User"
              status="Inactive"
            />
          </tbody>
        </table>
      </div>

      {/* System Categories */}
      <div className="card">
        <h3>System Categories</h3>

        <div className="category-grid">
          <CategoryCard name="King and Moffat" queries="103" />
          <CategoryCard name="Priority-4PS" queries="534" />
          <CategoryCard name="P6 Primavera6" queries="434" />
          <CategoryCard name="ACC" queries="543" />
          <CategoryCard name="Plant" queries="244" />
          <CategoryCard name="Asta" queries="374" />
        </div>
      </div>

      {/* Database */}
      <div className="card">
        <h3>Database Configuration</h3>

        <div className="db-row">
          <div>
            <strong>Demo Database</strong>
            <p>Local storage with sample data</p>
          </div>
          <span className="status connected">Connected</span>
        </div>

        <div className="db-row">
          <div>
            <strong>Total Records</strong>
            <p>Across all categories</p>
          </div>
          <strong>47 records</strong>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
}

function UserRow({ name, email, role, status }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <span className={`badge ${role.toLowerCase()}`}>{role}</span>
      </td>
      <td>
        <span
          className={`badge ${status === "Active" ? "active" : "inactive"}`}
        >
          {status}
        </span>
      </td>
      <td>
        <a
          className="link"
          onClick={() => alert(`Edit ${name}`)}
        >
          Edit
        </a>
      </td>
    </tr>
  );
}

function CategoryCard({ name, queries }) {
  return (
    <div className="category-card">
      <div>
        <strong>{name}</strong>
        <p>Active</p>
        <span className="query-pill">{queries} queries</span>
      </div>

      <span
        className="settings-icon"
        onClick={() => alert(`Configure ${name}`)}
      >
        ⚙️
      </span>
    </div>
  );
}
