import React from "react";
import "./approveinfo.css";

const users = [
  {
    name: "Adewale Samuel",
    device: "Mobile device",
    school: "Lagos state university",
    image: "/images/admindashb1.png"
  },
  {
    name: "Chinedu Okoro",
    device: "Laptop",
    school: "University of Ibadan",
    image: "/images/admindashb1.png"
  },
  {
    name: "Chinedu Okoro",
    device: "Laptop",
    school: "University of Ibadan",
    image: "/images/admindashb1.png"
  },
  {
    name: "Blessing Ada",
    device: "Tablet",
    school: "University of Nigeria",
    image: "/images/admindashb1.png"
  }
];

const ApproveInfo = () => {
  return (
    <div className="Approveinfo-Wrapper">
      <div className="aprroveinfo">
        <div className="approve-infor-header-text">
          <h2 className="ApproveInfoe-h2">NAMES OF USER</h2>
          <h2 className="ApproveInfoe-h2">STATE OF USERS DURING INFO VERIFICATION</h2>
        </div>

        {users.map((user, index) => (
          <div className="approveinfo-body" key={index}>
            <div className="profileinfo-approve">
              <div className="approveinfo-left">
                <div className="approveinfo-left-header">
                  <div className="approveinfo-left-header-img">
                    <img
                      src={user.image}
                      alt="profile"
                      className="approveinfo-left-header-image"
                    />
                  </div>
                  <div className="approveinfo-left-header-text">
                    <h3 className="approveinfo-left-header-text-h3">{user.name}</h3>
                    <p className="approveinfo-left-header-text-p1">{user.device}</p>
                    <p className="approveinfo-left-header-text-p2">{user.school}</p>
                  </div>
                </div>
              </div>
              <div className="approveinfo-right">
                <div className="approveinfo-right-approve">
                  <input type="checkbox" className="approveinfo-right-approve-checkbox" />
                  <h3 className="approveinfo-right-approve-h3">Approve</h3>
                </div>
                <div className="approveinfo-right-approve">
                  <input type="checkbox" className="approveinfo-right-pending-checkbox" />
                  <h3 className="approveinfo-right-approve-h3">Pending</h3>
                </div>
                <div className="approveinfo-right-approve">
                  <input type="checkbox" className="approveinfo-right-not-approve-checkbox" />
                  <h3 className="approveinfo-right-approve-h3">Not Approved</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveInfo;
