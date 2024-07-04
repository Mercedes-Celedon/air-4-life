import React, { useEffect, useState } from 'react';
import "./worldmap.scss";
import CardValoration from './CardValoration';
import {AdvancedMarker, APIProvider, Map, Marker, Pin} from '@vis.gl/react-google-maps';
import { fetchAirQualityData } from '../../../services/a'

const Worldmap = () => {

  useEffect(() => {
    fetchAirQualityData("Barcelona").then(apiResponse => {
      const dataObject = apiResponse.data.data;
      const cityObject = dataObject["city"];
      const coordinates = cityObject["geo"];

      let coords = [];
      coords.push({ name: "Barcelona", position: { lat: coordinates[0], lng: coordinates[1] } });
     
    });
  }, []);

  const position = {lat: 41.38534, lng: 2.153822};
  return (
    <section className="valorations">
      <CardValoration />
        <APIProvider apiKey={'AIzaSyC67DJAj1LssGxinHomtpIkjpYQnl9feWY'}>
          <Map 
            defaultCenter={position} 
            mapId={'bf51a910020fa25a'}
            style={{"height":"120%!important"}} 
            defaultZoom={10}
            disableDefaultUI>

            <AdvancedMarker
              key={"random"}
              position={{ lat: 41.38534, lng: 2.153822  }}>
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
            
            {
              /*mapCoordinates.map(coordinate => {
                //console.log(coordinate.location);
                //let lat = coordinate.position.lat;
                //let lng = coordinate.position.lng;

                <AdvancedMarker
                  key={coordinate.lat}
                  position={coordinate.location}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
              })*/
            }
          </Map>
        </APIProvider>
      
      
    </section>
  )
}

export default Worldmap