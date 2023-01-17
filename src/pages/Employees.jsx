import React from 'react'
import {GridComponent, ColumnsDirective,Toolbar,Search, Sort, ContextMenu, Filter, Page, ExcelExport , PdfExport, Edit, Injext } from '@syncfusion/ej2-react-grids'
import  {employeesData, contextMenuItems, employeesGrid} from '../app_data/dummy'
import {Header} from '../components'
import { ColumnDirective, Inject } from '@syncfusion/ej2-react-grids/src'
const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:-10 bg-white rounded-3xl">
      
    <Header title="Customers" category="Page"/>
    <GridComponent
     width="auto"
      dataSource={employeesData}
       allowPaging
        allowSorting
         toolbar={['Search']}
    >
      <ColumnsDirective>
      {employeesGrid.map((item, index)=>(
        <ColumnDirective key={index} {...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Search, Page,Toolbar,Edit ]}/>
    </GridComponent>
  </div>
  )
}

export default Employees