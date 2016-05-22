const React = require('react')
const {GoogleMapLoader, GoogleMap} = require('react-google-maps')

const GoogleMapComponent = (props) => (
  <GoogleMapLoader
    containerElement={<div style={{height: '100%'}} />}
    googleMapElement={
      <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
    }
    />
)

module.exports = GoogleMapComponent
