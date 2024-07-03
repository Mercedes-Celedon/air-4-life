import { SlEnergy, SlFire } from "react-icons/sl";
import { PiTree } from "react-icons/pi";
import { MdOutlineAgriculture } from "react-icons/md";



const AirCare = () => {
  return (
    <div id="cuidar-el-aire">
        <h2>Cuidado del aire</h2>
        <div className="cardsAirCare">
        <div className="singleCard">
            <SlEnergy />
            <h4>Consume menos energía</h4>
            <p>Apaga luces y electrodomésticos cuando no los uses para disminuir la generación de energía a partir de fuentes contaminantes.</p>
        </div>
        <div className="singleCard">
            <SlFire />
            <h4>Evitar Quemar Basura</h4>
            <p>Description</p>
        </div>
        <div className="singleCard">
            <PiTree />
            <h4>Plantar Árboles</h4>
            <p>Los árboles absorben dióxido de carbono y liberan oxígeno, mejorando la calidad del aire.</p>
        </div>
        <div className="singleCard">
            <MdOutlineAgriculture />
            <h4>Agricultura Sostenible</h4>
            <p>Apoya prácticas agrícolas que reduzcan el uso de pesticidas y fertilizantes químicos.</p>
        </div>
        </div>    
    </div>
  )
}

export default AirCare