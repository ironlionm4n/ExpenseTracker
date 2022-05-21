import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
  // transform the array of objects into an array of numbers for finding max value
  const dataPointValues = props.dataPoints.map(data => data.value)
  // spread operator pulls out all the array elements
  const totalMax = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
