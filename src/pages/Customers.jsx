import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Toolbar,
  Search,
  Sort,
  Selection,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import {
  customersData,
  contextMenuItems,
  customersGrid,
} from "../app_data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        allowFiltering
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
