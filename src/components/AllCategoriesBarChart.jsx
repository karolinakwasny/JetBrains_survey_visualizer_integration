import React from 'react'
import BarChartWrapper from './BarChartWrapper'

const AllCategoriesBarChart = ({ questions }) => {
  if (!questions.length) return <p>No data available</p>

  const { categoryDist, longestCategoryName } = questions.reduce(
    (acc, q) => {
      const category = acc.categoryDist[q.category] || {
        name: q.category,
        easy: 0,
        medium: 0,
        hard: 0,
      }
      category[q.difficulty] = (category[q.difficulty] || 0) + 1
      acc.categoryDist[q.category] = category

      if (q.category.length > acc.longestCategoryName.length) {
        acc.longestCategoryName = q.category
      }

      return acc
    },
    {
      categoryDist: {},
      longestCategoryName: '',
    }
  )

  const chartData = Object.values(categoryDist)

  // Calculate the required width for the YAxis
  const calculatedYAxisWidth = longestCategoryName.length * 8

  return (
    <div className="col-span-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Questions by Category and Difficulty
      </h2>
      <BarChartWrapper
        data={chartData}
        calculatedYAxisWidth={calculatedYAxisWidth} // Pass the new prop
      />
    </div>
  )
}

export default AllCategoriesBarChart
