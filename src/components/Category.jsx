import PieCharts from './PieCharts'
import { getDifficultyData, getTypeData } from '../utils/pieChartData'

const Category = ({ questions, selectedCategory }) => {
  if (!questions.length)
    return <p>No data available for the selected category</p>

  const difficultyData = getDifficultyData(questions)
  const typeData = getTypeData(questions)

  return (
    <div className="col-span-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {`Questions About "${selectedCategory}"`}
      </h2>
      <PieCharts
        difficultyData={difficultyData}
        typeData={typeData}
        difficultyTitle="Difficulty Distribution"
        typeTitle="Question Type Distribution"
      />
    </div>
  )
}

export default Category
