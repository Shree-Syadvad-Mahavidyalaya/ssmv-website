import React from 'react'
import GoogleMapReact from 'google-map-react';
import Foot from '../Footer/Foot';
import '../Map/Map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <>
        <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={25.3176}
          lng={82.9739}
          text="My Marker"
        />
      </GoogleMapReact>
      
    </div>
    <Foot/>
    </>
  )
}

export default Map