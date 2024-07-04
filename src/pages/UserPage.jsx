import React, { useState } from 'react'
import ModalForm from "../components/userpage/modal/ModalForm";
import RegisterList from '../components/userpage/registerList/RegisterList';
import Header from "../components/header/Header"
import "./userPage.scss"

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registers, setRegisters] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddRegister = (newRegister) => {
    setRegisters([...registers, newRegister]);
    handleCloseModal();
  };

  return (
    <div className="userContainer">
       <Header/>
      <button className="btnNewRegister" onClick={handleOpenModal}>Nuevo Registro</button>
      <div className='registerContainer'>
      {isModalOpen && <ModalForm onClose={handleCloseModal} onAddRegister={handleAddRegister} />}
      <div className='registerList'>
      <RegisterList registers={registers} />
      </div>
      </div>
    </div>
  );
};

export default UserPage;
