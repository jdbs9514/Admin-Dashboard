import React from 'react';
import { 
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries,
   Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective 
} from '@syncfusion/ej2-react-charts';
import { UseStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';

const ColorMapping = () => {

  const { currentMode } = UseStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Color Mapping" title="USA Climate - weather by month" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: 'white', mode: 'Range' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {
              rangeColorMapping.map((item, index) =>
                <RangeColorSettingDirective key={index} {...item} />
              )
            }
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping