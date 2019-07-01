<template >
  <div style="padding:0">
  <h1>Zamówienie dla stolika {{tableNumber}}</h1>
  <div class=" m-0 ">

    <!-- <button class="col-4 col-md-3 col-lg-2 btn btn-light">
      {{categoryName}}
    </button> -->

    <!-- <button v-for="cat in categories" :key="cat" @click="choosedCategory = cat"
     class="col-4 col-md-3 col-lg-2 btn btn-light">
      {{cat}}
    </button> -->
    <category v-for="cat in categories" :key="cat" :categoryName="cat"   />

  </div>

  <div class=" m-0 row ">

    <!-- <div  class="custom-control custom-checkbox col-12 col-sm-6"  v-for="prod in productList">
        <input type="checkbox" class="custom-control-input" :id="prod.name" :value="prod.name" v-model="choosed">
        <label class="custom-control-label" :for="prod.name">{{prod.name}}</label>
    </div> -->

  <product v-for="prd in productList" :prod="prd.name"  />

  </div>

  <button id="order" type="button" class="btn btn-success btn-block" name="button">Złóż zamówienie</button>
  {{choosed}}


</div>
</template>

<script>
import product from './Product.vue'
import category from './Category.vue'

export default {
  name:"order",
  data:function() {
    return {
      choosedCategory:this.firstChoose,
      choosed:[]
    }
  },
  props:{
    firstChoose:String,
   tableNumber: Number,
    products: Array,
    categories: Array
  },
  computed:{
    productList: function() {
      let parent= this;
      return this.products.filter((x) => { if(x.category == parent.choosedCategory){return x}})
    }
  },
  components: {
    category,
    product
  }

}
</script>
<style scoped>
  #order {
    position: absolute;
    bottom:  0px;
  }
</style>
