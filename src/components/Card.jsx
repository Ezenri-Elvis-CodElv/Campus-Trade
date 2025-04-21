import React, { useState } from "react";
import "./card.css";
import { useNavigate } from "react-router";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Modal, Popconfirm, message } from "antd";

const Card = ({ item }) => {
  const nav = useNavigate();
  const BASE_URL = "https://campustrade-kku1.onrender.com";
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(`${BASE_URL}/api/v1/delete-product/${id}`);
      // message.success("Product deleted successfully");
      setModalVisible(true);

      // window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete product.");
    }
  };

  return (
    <div className="card">
      <div className="card-img-holder">
        <img src={item?.media[0]} alt="product" />
      </div>

      <div className="card-info">
        <div className="card-img-name">
          <div className="card-name">
            <p>{item.productName}</p>
          </div>
          <div className="card-prices">
            <p>₦{item.price}</p>
          </div>
        </div>

        <div className="card-img-description">
          <p>Description: {item.description}</p>
          <p>Condition: {item.condition}</p>
        </div>

        <div className="card-uni-name">
          <p>School: {item.school}</p>
        </div>

        <div className="card-time">
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
              <MdDeleteForever title="Delete" />
            </div>
          </Popconfirm>
          <Modal
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            centered
          >
            <h2 style={{ textAlign: "center" }}>✅Item successfully Deleted!</h2>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
            Item has been deleted successfully!
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;
