import React, { useState } from "react";
import "./card.css";
import { useNavigate } from "react-router";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Modal, Popconfirm, message } from "antd";
import { TbCreditCardPay } from "react-icons/tb";

const Card = ({ item }) => {
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

      // window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete product.");
    }
  };

  const PayOut = async (id) => {
    const data = { name: user.fullName, email: userData.data.email };
    console.log(id, data);
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/initialize/${id}`, data);
      console.log(res);
        window.location.href = res?.data?.data?.checkout_url;
    
    } catch (error) {
      console.log(error);
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

        {userData ? (
          <div className="editanddelete">
            <button className="paymenticon" onClick={() => PayOut(item.id)}>
              <TbCreditCardPay size={18} /> Pay
            </button>

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
              <h2 style={{ textAlign: "center" }}>
                ✅Item successfully Deleted!
              </h2>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Item has been deleted successfully!
              </p>
            </Modal>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
