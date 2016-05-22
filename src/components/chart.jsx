const React = require('react')
const {Sparklines, SparklinesLine, SparklinesReferenceLine} = require('react-sparklines')
const _ = require('lodash')

const average = (data) => {
  return _.round(_.sum(data)/data.length)
}

const Chart = (props) => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type='avg' />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
  </div>
)

module.exports = Chart
