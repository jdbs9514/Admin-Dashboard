import React from 'react'
import { pieChartData } from '../../data/dummy'
import { ChartsHeader } from '../../components'
import Doughnut from '../../components/Charts/Doughnut'

const Pie = () => {

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full" style={{justifyContent: 'center'}}>
        <Doughnut
          id="Chart-pie"
          data={pieChartData}
          legendVisibility
          height="full" 
        />
      </div>
    </div>
  )
}

export default Pie