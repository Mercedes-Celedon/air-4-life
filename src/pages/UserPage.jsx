import React, { useState } from 'react'
import ModalForm from "../components/userpage/modal/ModalForm";
import RegisterList from '../components/userpage/registerList/RegisterList';
import Header from "../components/header/Header"
import "./userPage.scss"
import UseApi from '../services/useApi';

const UserPage = () => {
  const resultadoJson = 'http://localhost:8000/comment';
  const { data, error } = UseApi(resultadoJson);
  if (error) {
    return <div>Error: {error}</div>;
}

if (!data) {
    return <div>Loading...</div>;
}
  /*const [isModalOpen, setIsModalOpen] = useState(false);
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
  };*/

  return (
    <div className="userContainer">
       <Header/>
      <button className="btnNewRegister" onClick={handleOpenModal}>Nuevo Registro</button>
      <div className='registerContainer'>
      {isModalOpen && <ModalForm onClose={handleCloseModal} onAddRegister={handleAddRegister} />}
      <div className='registerList'>
      <RegisterList registers={data} />
      </div>
      </div>
    </div>
  );
};

export default UserPage;
