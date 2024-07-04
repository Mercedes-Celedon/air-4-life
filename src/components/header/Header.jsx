import "./header.scss"
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbarHome">
        <div className="logo">
          <img src="images/logo-air-4-life.png" alt="logo air 4 life" />
        </div>
        <ul>
          <li><a href="#valoracion">Valoración</a></li>                
          <li><a href="#el-aire-hoy">El aire hoy</a></li>
          <li><a href="#cuidar-el-aire">Cuidar el Aire</a></li>                
          <li><a href="#noticias">Noticias</a></li>
        </ul>
        <Link to="/"><button className="btnLogin"> <SlUser /> Login</button></Link> 
    </div>
  )
}

export default Header