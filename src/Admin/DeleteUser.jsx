import { React, useState } from "react";
import "./deleteuser.css"

const initialUserPostData = [
  {
    img: "/images/Nnamdi.svg",
    name: "Joshua Saleh",
    category: "Books",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/Nnamdi.svg",
    name: "Victoria-Okon",
    category: "Mobile device",
    location: "Lagos state university",
    status: "pending",
  },
  {
    img: "/images/Nnamdi.svg",
    name: "Chidera Obi",
    category: "Mobile device",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/Nnamdi.svg",
    name: "Abu Mercy",
    category: "Shoes",
    location: "Lagos state university",
    status: "approved",
  },
  {
    img: "/images/Nnamdi.svg",
    name: "Kalu Chidera",
    category: "Books",
    location: "Lagos state university",
    status: "approved",
  },
];

const DeleteUser = () => {
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
        <span className="status-table-header-right">Call To Action</span>
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
          <div className="status-post-info">
  <div
    className={`status-box approved ${user.status === "approved" ? "selected" : ""}`}
    onClick={() => handleStatusChange(index, "approved")}
  >
    {user.status === "approved" && "✓"}
  </div>

  <span className="status-label"> Restrict Users</span>

  <div
    className={`status-box pending ${user.status === "pending" ? "selected" : ""}`}
    onClick={() => handleStatusChange(index, "pending")}
  >
    {user.status === "pending" && "✓"}
  </div>
  <span className="status-label"> Delete Users</span>

</div>

        </div>
      ))}

      <footer className="status-footer">@2025 campustrade</footer>
    </div>
  );
};

export default DeleteUser;