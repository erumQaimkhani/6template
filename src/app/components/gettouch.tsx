
"use client";
import React, { useState } from "react";
import Modal from "./modal"; 
import Checkout from "./checkout"; 

export default function Gettouch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 py-12 text-center justify-center">
      <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
      <p className="text-sm text-gray-600 justify-center">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="main-container w-[1058px] h-[923px] relative mx-auto mt-3">
        <div className="form-section w-[635px] h-[923px] bg-white absolute top-0 left-[423px] z-10">
     

          <button
            onClick={openModal}
            className="submit-btn w-[237px] h-[48px] rounded-[15px] border border-gray-400 bg-white text-black mt-[49px] mx-auto ml-[81px]"
          >
            <span className="block mt-[11px] text-center text-gray-500">
              Checkout
            </span>
          </button>
        </div>

        <div className="info-section w-[393px] h-[537px] bg-white absolute top-[68px] left-0 z-0">
      
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Please fill out the form below to complete
          your order.
        </p>
        <Checkout />
      </Modal>
    </div>
  );
}