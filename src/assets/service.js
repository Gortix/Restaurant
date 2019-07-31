import {Products} from './data/products'
import {Categories} from './data/categories'
import {TableOrders} from './data/tables'
import {Users} from './data/users'

export class Service{

  static getProducts(){
    return Products.data;
  }

  static getTables(){
    return TableOrders.tables;
  }

  static login(nick, pass){
    let usr= Users.users[nick];
    if(usr &&  usr == pass){
      return nick;
    }else{
      return "";
    }
  }

  static getCategories(){
    return Categories.data
  }


}
