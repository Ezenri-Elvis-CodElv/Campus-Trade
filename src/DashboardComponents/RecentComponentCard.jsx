import React, { useState } from "react";
import "../components/recentcard.css";
import { useNavigate } from "react-router";
import { MdDeleteForever, MdOutlinePayments } from "react-icons/md";
import { Modal, Popconfirm, message } from "antd";
import axios from "axios";

const RecentComponentCard = ({ item }) => {
  const nav = useNavigate();
  const BASE_URL = "https://campustrade-kku1.onrender.com";
  const [modalVisible, setModalVisible] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = JSON.parse(localStorage.getItem("user"));


  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(`${BASE_URL}/api/v1/delete-product/${id}`);
      // message.success("Product deleted successfully");
      setModalVisible(true);
      setTimeout(() => {
        nav("/dashboard")
      }, 3000);

      // window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete product.");
    }
  };


  return (
    <>
      <div
        className="recent-card"
        // onClick={() => nav(`/productdetailpage/${item.id}`)}
      >
        <div className="card-img-holder">
          <img src={item?.media[0]} alt="" />
        </div>

        <div className="recent-card-img-name">
          <div className="recent-card-name">
            <p>{item.productName}</p>
          </div>
          <div className="recent-card-prices">
            <p>₦{item.price}</p>
          </div>
        </div>
        <div className="recent-card-img-description">
          <p>{item.description}</p>
          <p>Condition: {item.condition}</p>
        </div>
        <div className="recent-card-uni-name">
          <p>{item.school}</p>
        </div>
        <div className="recent-card-time">
          <p>{item.time}</p>
        </div>

           <div className="editanddelete">
        
                    <Popconfirm
                      title="Are you sure to delete this product?"
                      onConfirm={() => {
                        handleDelete(item.id);
                      }}
                      okText="Yes"
                      cancelText="No"
                    >
                      <div className="cardedit">
                        <MdDeleteForever size={20} title="Delete" /> 
                      </div>
                    </Popconfirm>
                    <Modal
                      open={modalVisible}
                      onCancel={() => setModalVisible(false)}
                      footer={null}
                      centered
                    >
                      <h2 style={{ textAlign: "center" }}>
                        ✅Item successfully Deleted!
                      </h2>
                      <p style={{ textAlign: "center", marginTop: "10px" }}>
                        Item has been deleted successfully!
                      </p>
                    </Modal>
                  </div>
      </div>
    </>
  );
};

export default RecentComponentCard;
