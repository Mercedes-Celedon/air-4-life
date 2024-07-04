import "./header.scss"
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbarHome">
        <div className="logo">
          <img src="images/logo-air-4-life.png" alt="logo air 4 life" />
        </div>
        <ul>               
          <li><a href="#cuidar-el-aire">Cómo cuidar el Aire</a></li>                
          <li><a href="#noticias">Noticias</a></li>
        </ul>
        <Link to="/"><button> <SlUser /> Login</button></Link> 
    </header>
  )
}

export default Header