// components/PieCharts.js
import React from 'react'
import CustomActiveShapePieChart from './CustomActiveShapePieChart'
import { DIFFICULTY_COLORS, TYPE_OF_QUESTION_COLORS } from '../colors'

const PieCharts = ({
  difficultyData,
  typeData,
  difficultyTitle,
  typeTitle,
}) => {
  return (
    <div className="pie-charts-responsive">
      <div>
        <h3 className="text-lg font-medium mb-2 text-center">
          {difficultyTitle}
        </h3>
        <CustomActiveShapePieChart
          data={difficultyData}
          colors={[
            DIFFICULTY_COLORS.easy,
            DIFFICULTY_COLORS.medium,
            DIFFICULTY_COLORS.hard,
          ]}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2 text-center">{typeTitle}</h3>
        <CustomActiveShapePieChart
          data={typeData}
          colors={[
            TYPE_OF_QUESTION_COLORS.multiple,
            TYPE_OF_QUESTION_COLORS.boolean,
          ]}
        />
      </div>
    </div>
  )
}

export default PieCharts
