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
import RoundedStackedBar from './RoundedStackedBar'

const BarChartWrapper = ({ data, calculatedYAxisWidth }) => {
  if (!data || !data.length) {
    return <p>No data available for the chart</p>
  }

  const chartMargin = { top: 20, right: 20, left: 20, bottom: 20 }

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ResponsiveContainer width="100%" height="100%" minWidth={600}>
        <BarChart data={data} layout="vertical" margin={chartMargin}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="name"
            width={calculatedYAxisWidth}
            tick={{
              fontSize: 14,
              style: { whiteSpace: 'nowrap' },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="center"
            height={40}
            iconType="circle"
            itemSorter={(a, b) => {
              const order = ['easy', 'medium', 'hard']
              const aValue = a?.value ?? ''
              const bValue = b?.value ?? ''
              return order.indexOf(aValue) - order.indexOf(bValue)
            }}
          />
          <Bar
            dataKey="easy"
            stackId="a"
            fill={DIFFICULTY_COLORS.easy}
            name="easy"
            shape={(props) => (
              <RoundedStackedBar {...props} categoryData={data} />
            )}
          />
          <Bar
            dataKey="medium"
            stackId="a"
            fill={DIFFICULTY_COLORS.medium}
            name="medium"
            shape={(props) => (
              <RoundedStackedBar {...props} categoryData={data} />
            )}
          />
          <Bar
            dataKey="hard"
            stackId="a"
            fill={DIFFICULTY_COLORS.hard}
            name="hard"
            shape={(props) => (
              <RoundedStackedBar {...props} categoryData={data} />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartWrapper
