import React from "react";
import ModalNav from "./ModalNav";

const Nav = ({ setisOpen, isOpen }) => {
  return (
    <div className="nav">
      <img
        src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg"
        alt=""
      />

      <div
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <ModalNav isOpen={isOpen} />
      </div>
      <h2>Live</h2>
      <h2>Push</h2>
      <h2>Link</h2>
      <h2>Shop</h2>
      <h2>Packs</h2>
      <h2>Help</h2>
      <h2>More +</h2>
      <h2>Try Live For Free</h2>
      <h2>Log in or register</h2>
    </div>
  );
};

export default Nav;
