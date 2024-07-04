import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UseApi from "../../../services/useApi";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const CardValoration = () => {
  const resultadoJson = 'http://localhost:8000/comment';
  const { data, error } = UseApi(resultadoJson);
  if (error) {
    return <div>Error: {error}</div>;
}

if (!data) {
    return <div>Loading...</div>;
}
    
    let counter = 1;
  return (
    <div className="cardValoration">
        <Carousel responsive={responsive} arrows={true} ssr={true} infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container">
            {data.map((a) => (
                <div key={a.id}>
                    <h2>{a.ciudad}</h2>
                    <p>{a.comentario}</p>
                </div>))}
        </Carousel>
    </div>
  )
}

export default CardValoration