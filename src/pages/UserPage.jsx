
import ModalForm from "../components/userpage/modal/ModalForm";
//import RegisterList from '../components/userpage/registerList/RegisterList';
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
 /* const [isModalOpen, setIsModalOpen] = useState(false);
  //const [registers, setRegisters] = useState([]);

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
      <div className="userSection">
      <ModalForm/>
      <div className='listContainer'>
        <h2>REGISTROS</h2>
        <ul>
          {data.map(a => (
            <li key={a.id}>
              <h3>{a.id}</h3>
              <p>Ciudad: {a.ciudad}</p>
              <p>Calificación: {a.valoracion} ❤️</p>
              <p>Comentario: {a.comentario}</p>
              <h4>Calidad del aire:</h4>
              <p>{a.calidadAire}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default UserPage;
