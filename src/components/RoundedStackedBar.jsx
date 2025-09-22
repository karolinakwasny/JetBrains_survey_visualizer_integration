import { Rectangle } from 'recharts'

const RoundedStackedBar = (props) => {
  const { x, y, width, height, fill, dataKey, categoryData, payload } = props

  const currentCategoryData = categoryData.find((d) => d.name === payload.name)

  if (!currentCategoryData) return null

  let topKey = null
  if (currentCategoryData.hard > 0) {
    topKey = 'hard'
  } else if (currentCategoryData.medium > 0) {
    topKey = 'medium'
  } else if (currentCategoryData.easy > 0) {
    topKey = 'easy'
  }

  const isTopBar = dataKey === topKey

  const radius = isTopBar ? [0, 5, 5, 0] : 0

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={radius}
    />
  )
}

export default RoundedStackedBar
