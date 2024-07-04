import Header from "../components/header/Header"
import AirCare from "../components/main/airCare/AirCare"
import Worldmap from "../components/main/worldmap/Worldmap"
import News from "../components/news/News"
import "../styles/homeResponsive.scss"
const Home = () => {
  return (
    <main>
        <Header/>
        <Worldmap />
        <AirCare />
        <News />
    </main>
  )
}

export default Home