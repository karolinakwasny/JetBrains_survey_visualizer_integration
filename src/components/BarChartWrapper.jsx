import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import CustomTooltip from './CustomTooltip'
import { DIFFICULTY_COLORS } from '../colors'

const BarChartWrapper = ({
  data,
  layout,
  margin,
  xAxisProps,
  yAxisProps,
  longestCategoryName,
}) => {

  if (!data || !data.length) {
    return <p>No data available for the chart</p>
  }

  const dynamicBottomMargin = Math.min(220, longestCategoryName.length * 10)

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={500}
          data={data}
          layout={layout}
          margin={{ ...margin, bottom: dynamicBottomMargin }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            {...xAxisProps}
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
          />
          <YAxis {...yAxisProps} interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="easy"
            stackId="a"
            fill={DIFFICULTY_COLORS.easy}
            name="easy"
          />
          <Bar
            dataKey="medium"
            stackId="a"
            fill={DIFFICULTY_COLORS.medium}
            name="medium"
          />
          <Bar
            dataKey="hard"
            stackId="a"
            fill={DIFFICULTY_COLORS.hard}
            name="hard"
          />
          <Legend
            verticalAlign="top"
            align="center"
            height={40}
            itemSorter={(a, b) => {
              const order = ['easy', 'medium', 'hard']
              const aValue = a?.value ?? ''
              const bValue = b?.value ?? ''
              return order.indexOf(aValue) - order.indexOf(bValue)
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartWrapper
