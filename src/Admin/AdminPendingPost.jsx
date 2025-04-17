import { React, useState } from "react";
import "./adminpendingpost.css"
const initialUserPostData = [
  {
    img: "/images/dasboadprofile.jpg",
    name: "Mary-Jane ",
    category: "Books",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/dasboadprofile.jpg",
    name: "Joshua Saleh",
    category: "Mobile device",
    location: "Lagos state university",
    status: "pending",
  },
  {
    img: "/images/dasboadprofile.jpg",
    name: "Ezenri Elvis",
    category: "Mobile device",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/dasboadprofile.jpg",
    name: "Edith Ogechi",
    category: "Shoes",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/dasboadprofile.jpg",
    name: "Kalu Chidera",
    category: "Books",
    location: "Lagos state university",
    status: "approved",
  },
];

const AdminPendingPost = () => {
  const [userData, setUserData] = useState(initialUserPostData);

  const handleStatusChange = (index, status) => {
    const updated = [...userData];
    updated[index].status = status;
    setUserData(updated);
  };

  return (
    <div className="status-table-container">
      <div className="status-table-header">
        <span className="status-table-header-left">NAMES OF USER</span>
        <span className="status-table-header-right">STATE OF THEIR POST</span>
      </div>

      {userData.map((user, index) => (
        <div className="status-table-row" key={index}>
          <div className="status-user-info">
            <img src={user.img} alt={user.name} className="status-user-image" />
            <div className="status-user-text">
              <strong className="status-user-name">{user.name}</strong><br />
              <span className="status-user-category">{user.category}</span><br />
              <span className="status-user-school">{user.location}</span>
            </div>
          </div>
          <div className="status-post-info" >
  <div
    className={`status-box approved ${user.status === "approved" ? "selected" : ""}`}
    onClick={() => handleStatusChange(index, "approved")}
  >
    {user.status === "approved" && "✓"}
  </div>
  <span className="status-label">Approved</span>

  <div
    className={`status-box pending ${user.status === "pending" ? "selected" : ""}`}
    onClick={() => handleStatusChange(index, "pending")}
  >
    {user.status === "pending" && "✓"}
  </div>
  <span className="status-label">Pending</span>

  <div
    className={`status-box not-approved ${user.status === "not-approved" ? "selected" : ""}`}
    onClick={() => handleStatusChange(index, "not-approved")}
  >
    {user.status === "not-approved" && "✓"}
  </div>
  <span className="status-label">Not approved</span>
</div>

        </div>
      ))}

      <footer className="status-footer">@2025 campustrade</footer>
    </div>
  );
};

export default AdminPendingPost;