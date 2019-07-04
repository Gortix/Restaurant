<template>
  <div id="app" class="row mx-1" mode="out-in">
    <loginPanel v-if="user == '' " @user="user = $event" />
    <template v-else>
      <tablesSection :availableTables="availableTables" @chosedTable="tableNumber= $event" class="col col-md col-lg" />
      <order class="col-9 col-md-9 col-lg-10" :choosedTable="getTableOrder" />
    </template>

  </div>

</template>

<script>

import tablesSection from './components/TablesSection.vue'
import order from './components/Order.vue'
import loginPanel from './components/LoginPanel.vue'
import {getData} from './mixins/getData.js'

export default {
  mixins: [getData],
  name: 'app',
  data: function() {
  return{
    availableTables: {},
    tableNumber:1,
    user: ""
  }
},
computed:{
  getTableOrder : function(){
    let pr= this;
    return this.availableTables.find((x) => {return x.id==pr.tableNumber })
  }
  },
  created: function() {
    this.availableTables= this.readTextFile("./data/tables.json").tables;
  },
  components: {
    tablesSection,
    order,
    loginPanel
  }
}
</script>

<style>
html,body{
    height:100%;
}

#app {
  height:95%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}



</style>
