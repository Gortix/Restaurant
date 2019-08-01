import {table} from './tables/table';

export class TableOrders{
  static  tables= TableOrders.createTables(16);



  static createTables(quantity){
    let tbls=[];
    for(let i=1; i<quantity; i++){
      tbls.push(new table(i));
    }
    return tbls;
  }

  static takeOrder(obj){
    let tbl= TableOrders.tables.find((x)=>{x.id == obj.id});
    // tbl.order= obj.order;
    // tbl.assignedTo= obj.assignedTo;
  }


}
