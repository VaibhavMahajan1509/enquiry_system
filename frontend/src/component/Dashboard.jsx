import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Content from "../component/Content";
import {
  getUserData,
  getHRData,
  getAllData,
  checkNotification,
} from "../component/API";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "User", role: "user" });
  const [activeTab, setActiveTab] = useState("mydata");
  const [role, setRole] = useState(localStorage.getItem("role") || "user");
  const [dashboardData, setDashboardData] = useState(null);
  const [notification, setNotification] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ---------------- ACTIVE TAB ----------------
  useEffect(() => {
    const path = location.pathname.split("/").pop();

    if (["mydata", "hrdata", "all"].includes(path)) {
      setActiveTab(path);
    } else {
      if (role === "HR") setActiveTab("hrdata");
      else if (role === "admin" || role === "super-admin") setActiveTab("all");
      else setActiveTab("mydata");
    }
  }, [location.pathname, role]);

  // ---------------- FETCH DATA (FIXED) ----------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await getUserData();

        console.log("DASHBOARD API:", res.data);

        // FIX: correct structure
        setDashboardData(res.data.data);

        // FIX: user info fallback safe
        setUser({
          name: res.data.user?.name || "User",
          role: role,
        });

      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchData();
  }, [role, navigate]);

  // ---------------- NOTIFICATIONS ----------------
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await checkNotification();
        if (res.data.notify) {
          setNotification(res.data.message);
        }
      } catch (err) {
        console.error(err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      {notification && (
        <div className="notification">{notification}</div>
      )}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        role={role}
      />

      {/* ✅ IMPORTANT FIX: pass real data */}
      <Content
        activeTab={activeTab}
        role={role}
        data={dashboardData}
      />
    </div>
  );
};

export default Dashboard;


