import React from 'react'
import { PieChart, Pie, Sector } from 'recharts'

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props

  const RADIAN = Math.PI / 180
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={cos >= 0 ? 'start' : 'end'}
        fill="#333"
      >
        {`questions: ${value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={cos >= 0 ? 'start' : 'end'}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const CustomActiveShapePieChart = ({ data, colors }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <PieChart width={500} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={(props) =>
          renderActiveShape({
            ...props,
            percent: props.value / totalValue,
          })
        }
        data={data.map((entry, index) => ({ ...entry, fill: colors[index] }))}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  )
}

export default CustomActiveShapePieChart
