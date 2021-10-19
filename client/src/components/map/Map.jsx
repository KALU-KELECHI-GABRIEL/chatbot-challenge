import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Close }from '@mui/icons-material'
import '../chat/chat.css'
import './map.css'


const LocationPin = ({ text }) => (
    <div className="pin">
      <Close/>
    </div>
  )

function Map({location, commandToChild}) {
    return (
          <div className="google-map">
            <button>exit</button>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCRx_LPfPytH60BNZ39xZ7XfHzqertGYfg' }}
            defaultCenter={location}
            defaultZoom={10}
        >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
            <button className="btn" onClick={ () => commandToChild(location) }>exit</button>
          </div>
    )
}

export default Map
