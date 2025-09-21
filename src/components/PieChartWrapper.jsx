import React from 'react'
import CustomActiveShapePieChart from './CustomActiveShapePieChart'
import { DIFFICULTY_COLORS } from '../colors'

const PieChartWrapper = ({ data }) => {
  if (!data) {
    return <p>No data available for the selected category</p>
  }

  const pieData = [
    { name: 'Easy', value: data.easy || 0 },
    { name: 'Medium', value: data.medium || 0 },
    { name: 'Hard', value: data.hard || 0 },
  ]

  return (
    <CustomActiveShapePieChart
      data={pieData}
      colors={[
        DIFFICULTY_COLORS.easy,
        DIFFICULTY_COLORS.medium,
        DIFFICULTY_COLORS.hard,
      ]}
    />
  )
}

export default PieChartWrapper
