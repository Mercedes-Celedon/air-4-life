import Header from "../components/header/Header"
import AirCare from "../components/main/airCare/AirCare"
import WindToday from "../components/main/windToday/WindToday"
import Worldmap from "../components/main/worldmap/Worldmap"

const Home = () => {
  return (
    <main>
        <Header/>
        <Worldmap />
        <WindToday />
        <AirCare />
    </main>
  )
}

export default Home