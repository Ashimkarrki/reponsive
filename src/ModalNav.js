import React from "react";

const ModalNav = ({ isOpen }) => {
  return (
    <div className="modalNav">
      <h2>Menu</h2>
      <div className={`hide ${isOpen ? "second" : ""}`}>
        <h2>Live</h2>
        <h2>Push</h2>
        <h2>Link</h2>
        <h2>Shop</h2>
        <h2>Packs</h2>
        <h2>Help</h2>
      </div>
    </div>
  );
};

export default ModalNav;
