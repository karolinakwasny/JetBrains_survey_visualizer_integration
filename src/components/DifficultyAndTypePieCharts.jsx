import React from 'react'
import PieCharts from './PieCharts'

const DifficultyAndTypePieCharts = ({ difficultyData, typeData }) => (
  <PieCharts
    difficultyData={difficultyData}
    typeData={typeData}
    difficultyTitle="Overall Difficulty Distribution"
    typeTitle="Overall Question Type Distribution"
  />
)

export default DifficultyAndTypePieCharts
