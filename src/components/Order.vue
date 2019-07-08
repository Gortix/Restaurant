<template >
  <div class="d-flex flex-column"  style="padding:0; background-color: white; overflow-y: auto;" :style="{'max-height': windowHeight +'px' }">
    <h1 v-if="windowWidth > 576" >Zamówienie dla stolika {{choosedTable.id}}</h1>
    <h4 v-else>Zamówienie dla stolika {{choosedTable.id}}</h4>
    <div class=" m-0 d-flex justify-content-center  flex-wrap align-content-center">
      <category v-for="cat in categories" :key="cat" :categoryName="cat"  @catoegory="choosedCategory = $event" />
    </div>

    <div  class=" m-0 row mb-5" >
      <div class="row">
      <product v-for="prd in productList" :prod="prd.name"  />
      </div>

    </div>

    <div class="w-100 mt-auto">
      <b-button  v-if="choosedTable.assignedTo != ''" type="button" class="btn btn-warning btn-block"  @click="showMsgBox" >Wydano</b-button>
      <button type="button" class="btn btn-success btn-block" @click="sendOrder" name="button">Złóż zamówienie</button>

    </div>

</div>
</template>

<script>
import product from './Order/Product.vue'
import category from './Order/Category.vue'
import {getData} from '../mixins/getData.js'
import { vueWindowSizeMixin } from 'vue-window-size';
//vueWindowSizeMixin
export default {
  mixins: [getData, vueWindowSizeMixin],
  name:"order",
  data:function() {
    return {
      choosedCategory: "",
      products: [],
      categories:[],
      order: []
    }
  },
  props:{
    choosedTable: Object

  },
  methods: {
    sendOrder: function() {
      this.choosedTable.order= this.order;
      this.choosedTable.assignedTo= this.$parent.user;

    },
    finishOrder: function() {
      this.order= [];
      this.choosedTable.order=[];
      this.choosedTable.assignedTo= '';
    },
    showMsgBox() {
       this.$bvModal.msgBoxConfirm('Czy zamówienie na pewno zostało wydane?')
         .then(value => {
           if(value) this.finishOrder();
         })
     },
  },
  computed:{
    productList: function() {
      let pr= this;
      return this.products.filter((x) => { if(x.category == pr.choosedCategory){return x}})
    }
  },
  watch: {
   choosedTable: function (newVal, oldVal) {
     if(newVal.id != oldVal.id)
      this.order= newVal.order;
   }
 },
  created: function() {
    let startData= this.readTextFile("./data/data.json");
    this.categories= startData.categories;
    this.products=  startData.products;
    this.choosedCategory= this.categories[0];
  },
  components: {
    category,
    product
  }

}
</script>
