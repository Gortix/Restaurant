<template>
  <div id="app" class=" mx-1 row">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Zamówienie dla stolika {{tableNumber}}</h1>
    <div class="row">
      <category v-for="cat in categories" :categoryName="cat" />
    </div>
    <div class="row">
      <product v-for="prd in products" :prod="prd"  />
    </div> -->

    <tablesSection :availableTables="availableTables" @chosedTable="tableNumber= $event" class="col-sm" />
    <order class="col-sm-10" :choosedTable="getTableOrder" />

  </div>

</template>

<script>

import tablesSection from './components/TablesSection.vue'
import order from './components/Order.vue'
import {getData} from './mixins/getData.js'

export default {
  mixins: [getData],
  name: 'app',
  data: function() {
  return{
    availableTables: {},
    tableNumber:1,
    user: "Daria"
  }
},
computed:{
  getTableOrder : function(nm){
    let pr= this;
    return this.availableTables.find((x) => {return x.id==pr.tableNumber })
  }
},
created: function() {
  this.availableTables= this.readTextFile("./data/tables.json").tables;
},
  components: {
    tablesSection,
    order
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
