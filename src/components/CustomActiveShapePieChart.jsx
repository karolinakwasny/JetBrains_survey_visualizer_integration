import { PieChart, Pie, Cell } from 'recharts'
import { UI_COLORS } from '../colors'

const CustomActiveShapePieChart = ({ data, colors }) => {
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        isAnimationActive={false}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={20}
        outerRadius={50}
        label={(props) => {
          const { cx, cy, midAngle, outerRadius, fill, value, name } = props
          if (value === 0) return null

          const RADIAN = Math.PI / 180
          const percent = ((value / totalValue) * 100).toFixed(2)

          const labelRadius = outerRadius + 30 // increase this to move text farther
          const x = cx + labelRadius * Math.cos(-midAngle * RADIAN)
          const y = cy + labelRadius * Math.sin(-midAngle * RADIAN)

          return (
            <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'}>
              <tspan x={x} dy={0} fill={UI_COLORS.textMuted}>
                {name}:
              </tspan>
              <tspan x={x} dy={18} fill={fill}>
                {value}
              </tspan>
              <tspan x={x} dy={18} fill={UI_COLORS.textMuted}>
                ({percent}%)
              </tspan>
            </text>
          )
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default CustomActiveShapePieChart
