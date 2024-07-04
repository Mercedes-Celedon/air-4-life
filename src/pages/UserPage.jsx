import React, { useState } from 'react'
import ModalForm from "../components/userpage/modal/ModalForm";
import RegisterList from '../components/userpage/modal/RegisterList';

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
      <button className="btnNewRegister" onClick={handleOpenModal}>Nuevo Registro</button>
      {isModalOpen && <ModalForm onClose={handleCloseModal} onAddRegister={handleAddRegister} />}
      <RegisterList registers={registers} />
    </div>
  );
};

export default UserPage;
