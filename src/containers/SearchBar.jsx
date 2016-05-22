const React = require('react')
const {connect} = require('react-redux')
const {bindActionCreators} = require('redux')
const {fetchWeather} = require('../actions/index')

const SearchBar = React.createClass({
  getInitialState () {
    return {term: ''}
  },
  onInputChagne(event) {
    this.setState({
      term: event.target.value
    })
  },
  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder='Get a five-day forecase in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChagne}
          />
        <span className="input-group-btn">
          <button type='submit' className='btn btn-success'>Submit</button>
        </span>
      </form>
    )
  }
})

const mapStateToProps = (data) => {
  console.log('hi')
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}

const connector = connect(null,mapDispatchToProps)(SearchBar)

module.exports = connector
