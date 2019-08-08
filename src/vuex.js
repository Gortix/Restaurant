import Vue from 'vue';
import Vuex from 'vuex'

import {Products} from './assets/data/products'
import {Categories} from './assets/data/categories'
import {TableOrders} from './assets/data/tables'
import {Users} from './assets/data/users'


Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    products: Products.data,
    categories: Categories.data,
    tablesOrder: TableOrders.tables,
    choosedTableNumber: 1,
    user:''
  },
  getters:{
     getTableById: (state)=> (id)=>{
       return state.tablesOrder.find((x)=>x.id == id)

     },
     choosedTable:(state, getters)=>{
       return getters.getTableById(state.choosedTableNumber)
     },
  },
  mutations:{
    changeChoosedTable: (state, id)=>{
      state.choosedTableNumber= id;
    },
  },
  actions:{
    updateTableOrder:({getters, state}, newVal)=>{
      let tbl= getters.choosedTable;
      tbl=Object.assign(tbl, newVal,{"assignedTo":state.user})
    },
    clearTableOrder: ({getters, state})=>{
      let tbl= getters.choosedTable;
      tbl=Object.assign(tbl,{"assignedTo":'',"order":''})
    },
    login: ({state}, login)=>{
      setTimeout(()=>{
        let usr= Users.users[login.nick];
        if(usr &&  usr == login.pass){
          state.user= login.nick;
        }
      },500)

     }
  }
})
