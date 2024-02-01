import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, StackingColumnSeries, Tooltip
} from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { UseStateContext } from '../../contexts/ContextProvider'


const Stacked = ({ width, heigh }) => {

  const { currentMode } = UseStateContext();

  return (
    <ChartComponent
      width={width}
      height={heigh}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked