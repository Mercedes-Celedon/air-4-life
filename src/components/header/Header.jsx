import { SlUser } from "react-icons/sl";

const Header = () => {
  return (
    <div>
        <img src="" alt="logo air 4 life" />
        <nav>
            <ul>
                <li><a href="#valoracion">Valoración</a></li>                
                <li><a href="#el-aire-hoy">El aire hoy</a></li>
                <li><a href="#cuidar-el-aire">Cuidar el Aire</a></li>                
                <li><a href="#noticias">Noticias</a></li>
            </ul>
        </nav>   
        <a href="#"><button> <SlUser /> Login</button></a> 
    </div>
  )
}

export default Header