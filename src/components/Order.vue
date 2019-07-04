<template >
  <div style="padding:0">
  <h1>Zamówienie dla stolika {{choosedTable.id}}</h1>
  <div class=" m-0 ">
    <category v-for="cat in categories" :key="cat" :categoryName="cat"  @catoegory="choosedCategory = $event" />
  </div>

  <div class=" m-0 row ">
    <product v-for="prd in productList" :prod="prd.name"  />
  </div>
  <div id="order" class=" w-100">
    <b-button  v-if="choosedTable.assignedTo != ''" type="button" class="btn btn-warning btn-block" @click="showMsgBoxOne" >Wydano</b-button>
    <button type="button" class="btn btn-success btn-block" @click="sendOrder" name="button">Złóż zamówienie</button>

  </div>

</div>
</template>

<script>
import product from './Order/Product.vue'
import category from './Order/Category.vue'
import {getData} from '../mixins/getData.js'

export default {
  mixins: [getData],
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
    showMsgBoxOne() {
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
<style scoped>
  #order {
    position: absolute;
    bottom:  0px;
  }
</style>
