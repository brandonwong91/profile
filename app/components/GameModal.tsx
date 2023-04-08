import React from "react";
import ChromeDinoGame from "react-chrome-dino";
const GameModal = () => {
  return (
    <>
      <input type="checkbox" id="game-modal" className="modal-toggle" />
      <label htmlFor="game-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">👾</h3>
          <ChromeDinoGame />
        </label>
      </label>
    </>
  );
};

export default GameModal;
