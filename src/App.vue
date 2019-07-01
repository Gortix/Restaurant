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

    <tablesSection :availableTables="availableTables"  class="col" />
    <order class="col-10" :choosed="getTableOrder.order"  :firstChoose="choosedMenu" :tableNumber="tableNumber" :categories="categories" :products="productsNew" />
    <!-- <restaurantTable :tableNumber='1' @chosedTable="tableNumber = $event" />
      <restaurantTable :tableNumber='2' /> -->

  </div>

</template>

<script>

import tablesSection from './components/TablesSection.vue'
// import product from './components/Product.vue'
// import category from './components/Category.vue'
import order from './components/Order.vue'

export default {
  name: 'app',
  data: function() {
  return{
    availableTables: {},
    tableNumber:1,
    choosedMenu:"Obiad",
    categories: '',
    productsNew:'',
  }
},
methods: {

   readTextFile: function(file)
   {
   var result;
     var rawFile = new XMLHttpRequest();
     rawFile.open("GET", file, false);
     rawFile.onreadystatechange = function ()
     {
         if(rawFile.readyState === 4)
         {
             if(rawFile.status === 200 || rawFile.status == 0)
             {
                 result = rawFile.responseText;

             }
         }
     }
     rawFile.send(null);
      return JSON.parse(result);
    }
},
computed:{
  getTableOrder : function(nm){
    let pr= this;
    console.log(this.availableTables.find((x) => {return x.id==pr.tableNumber }));
    console.log(this.availableTables.find((x) => {return x.id==pr.tableNumber }).id);
    console.log(this.availableTables.find((x) => {return x.id==pr.tableNumber }).order);
    return this.availableTables.find((x) => {return x.id==pr.tableNumber })
  }
},
created: function() {
  let startData= this.readTextFile("./data/data.json");
  this.categories= startData.categories;
  this.productsNew=  startData.products;
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
