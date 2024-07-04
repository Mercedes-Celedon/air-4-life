import { SlEnergy, SlFire } from "react-icons/sl";
import { PiTree } from "react-icons/pi";
import { MdOutlineAgriculture } from "react-icons/md";
import "./aircare.scss"


const AirCare = () => {
  return (
    <section id="cuidar-el-aire" className="airCare">
        <h2>Como cuidar del aire</h2>
        <div className="cardsAirCare">
        <div className="singleCard">
            <div className="iconCard"><SlEnergy /></div>
            <h4>Consume menos energía</h4>
            <p>Apaga luces y electrodomésticos cuando no los uses para disminuir la generación de energía a partir de fuentes contaminantes.</p>
        </div>
        <div className="singleCard">
            <div className="iconCard"><SlFire /></div>
            <h4>Evitar Quemar Basura</h4>
            <p>No quemes basura ni restos de poda; esto libera contaminantes peligrosos en la atmósfera.</p>
        </div>
        <div className="singleCard">
            <div className="iconCard"><PiTree /></div>
            <h4>Plantar Árboles</h4>
            <p>Los árboles absorben dióxido de carbono y liberan oxígeno, mejorando la calidad del aire.</p>
        </div>
        <div className="singleCard">
            <div className="iconCard"><MdOutlineAgriculture /></div>
            <h4>Agricultura Sostenible</h4>
            <p>Apoya prácticas agrícolas que reduzcan el uso de pesticidas y fertilizantes químicos.</p>
        </div>
        </div>    
    </section>
  )
}

export default AirCare