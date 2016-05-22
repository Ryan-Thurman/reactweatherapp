const React = require('react')
const {connect} = require('react-redux')
const Chart = require('../components/chart')
const GoogleMap = require('../components/googleMap')


const WeatherList = React.createClass({
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map((weather) => weather.main.temp )
    const pressure = cityData.list.map((weather) => weather.main.pressure )
    const humidity = cityData.list.map((weather) => weather.main.humidity )
    const convert = temps.map((temp) => (temp - 273.15)* 1.8 + 32.00 )
    const {lon, lat} = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={convert} color='orange' units="F" />
        </td>
        <td>
          <Chart data={pressure} color='green' units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color='red' units="%"/>
        </td>
      </tr>
    )
  },
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
})

const mapStateToProps = (state) => {
  return {weather: state.weather}
}

const connector = connect(mapStateToProps)(WeatherList)

module.exports = connector
