import React from 'react'
import {GridComponent, ColumnsDirective,Resize, Sort, ContextMenu, Filter, Page, ExcelExport , PdfExport, Edit, Injext } from '@syncfusion/ej2-react-grids'
import  {employeesData, contextMenuItems, employeesGrid} from '../app_data/dummy'
import {Header} from '../components'
import { ColumnDirective, Inject } from '@syncfusion/ej2-react-grids/src'
const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:-10 bg-white rounded-3xl">
      
    <Header title="Orders" category="Page"/>
    <GridComponent id="gridcomp" dataSource={employeesData} allowPaging allowSorting>
      <ColumnsDirective>
      {employeesGrid.map((item, index)=>(
        <ColumnDirective key={index} {...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
    </GridComponent>
  </div>
  )
}

export default Employees