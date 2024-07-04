import Header from "../components/header/Header"
import AirCare from "../components/main/airCare/AirCare"
import Worldmap from "../components/main/worldmap/Worldmap"
import News from "../components/news/News"
import UseApi from "../services/useApi"
import "../styles/homeResponsive.scss"

const Home = () => {
 const resultadoJson = 'http://localhost:8000/comment';
  const { data, error } = UseApi(resultadoJson);
  if (error) {
    return <div>Error: {error}</div>;
}

if (!data) {
    return <div>Loading...</div>;
}
/*let data = []
	fetch('http://localhost:8000/comment')
	.then(response => response.json())
	.then(json => {
		data = json.results;
	});*/
  console.log(data)
  return (
    <main>
        <Header/>
        <Worldmap />
        <AirCare />
        <News />
        <div>{data.map(a=>(
          <p>{a.id}</p>
        ))}</div>
    </main>
  )
}

export default Home