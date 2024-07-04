import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    const valoration=[
        {
            city:"Barcelona",
            valoration:4,
            message:"Este es un mensaje de valoración de la ciudad random que está elegida. Este es un mensaje de valoración de la ciudad random que está elegida."
        },{
            city:"Granada",
            valoration:5,
            message:"Este es un mensaje de valoración de la ciudad random que está elegida. Este es un mensaje de valoración de la ciudad random que está elegida."
        },{
            city:"Madrid",
            valoration:5,
            message:"Este es un mensaje de valoración de la ciudad random que está elegida. Este es un mensaje de valoración de la ciudad random que está elegida."
        },{
            city:"Zaragoza",
            valoration:3,
            message:"Este es un mensaje de valoración de la ciudad random que está elegida. Este es un mensaje de valoración de la ciudad random que está elegida."
        },
    ];
    let counter = 1;
  return (
    <div className="cardValoration">
        <Carousel responsive={responsive} arrows={true} ssr={true} infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container">
            {valoration.map((data) => (
                <div key={counter++}>
                    <h2>{data.city}</h2>
                    <p>{data.message}</p>
                </div>))}
        </Carousel>
    </div>
  )
}

export default CardValoration