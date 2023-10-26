import React, { useState } from "react";
import ReactStars from 'react-stars';

// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



export default function Food({ food }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow} className="img-box">
        <h1>{food.name}</h1>
        
        <img
          src={food.image}
          className=" food-img img-fluid"
          
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>{food.item}</p>
          {/* <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {food.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select> */}

          <p>{food.address}</p>
        </div>

        <div className="w-100 m-1">
          {/* <p>₹ {food.price}</p> */}
          <ReactStars
        count={5}
        value = {food.rating}
        size={24}
        color2={'#ffd700'}
      />
          {/* <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select> */}
          <p>₹ {food.price}</p>

        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          {/* <h1 className="mt-1">
            Price: {food.prices[0][varient] * quantity} Rs/-
          </h1> */}
          <p>link</p>
        </div>

        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.image} className="img-fluid" style={{height:'400px'}}/>
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
