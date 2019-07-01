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

    <tablesSection  class="col" />
    <order class="col-9"  :firstChoose="choosed" :tableNumber="tableNumber" :categories="categories" :products="productsNew" />
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
    tableNumber:23,
    choosed:"Obiad",
    categories: ["Pizza", "Obiad", "Desery"],
    products: ["Pierwszy", "Drugi", "trzeci", "czwarty"],
    productsNew:[
      {name: "Pierwszy", category: "Pizza"},
      {name: "Drugi", category: "Pizza"},
      {name: "trzeci", category: "Obiad"},
      {name: "czwarty", category: "Obiad"},

    ],
  }
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
