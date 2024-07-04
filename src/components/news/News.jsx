import "./news.scss"

const News = () => {
  return (
    <section className="noticias" id="noticias">
         <h2>Últimas noticias</h2>
        <div className="cardsNews">
            <div className="singleNew">
                <div className="imgNew">
                    <img src="https://www.csic.es/sites/default/files/InauguracionLaborariotio.jpeg" alt="Inaguración del laboratorio"></img>
                </div>
                <h4>inauguran el Laboratorio de Calidad del Aire de Canarias</h4>
                <p>Esta infraestructura permitirá detectar y reaccionar a situaciones de emergencia por la mala calidad del aire, entre ellos, derivadas de incendios forestales, erupciones volcánicas y calimas...</p>
                <button><a href="https://www.csic.es/es/actualidad-del-csic/el-csic-y-el-gobierno-de-canarias-inauguran-el-laboratorio-de-calidad-del-aire-de-canarias">Ver Noticia</a></button>
            </div>
            <div className="singleNew">
                <div className="imgNew">
                    <img src="https://cdn.who.int/media/images/default-source/big-stories/air-pollution/gallery/air-pollution.tmb-1024v.jpg?sfvrsn=50b110a6_12" alt=""></img>
                </div>
                <h4>Cómo la contaminación del aire destruye la salud</h4>
                <p>Según datos de la OMS, el 99% de la población mundial respira aire que supera los límites establecidos en las directrices de la OMS y que contiene altos niveles de contaminantes...</p>
                <button><a href="https://www.who.int/es/news-room/spotlight/how-air-pollution-is-destroying-our-health">Ver Noticia</a></button>
            </div>
            <div className="singleNew">
                <div className="imgNew">
                    <img src="https://www.isglobal.org/documents/d/guest/isglobal_infografias-ciudades_post_es-01" alt=""></img>
                </div>
                <h4>Las ciudades compactas tienen menor huella de carbono</h4>
                <p>Un estudio de ISGlobal analiza 919 ciudades europeas y su calidad medioambiental, emisiones de CO2 e impacto en la salud humana...</p>
                <button><a href="https://www.isglobal.org/-/ciudades-compactas-menor-huella-de-carbono-y-peor-calidad-ambiental">Ver Noticia</a></button>
            </div>
        </div>   
    </section>
  )
}

export default News