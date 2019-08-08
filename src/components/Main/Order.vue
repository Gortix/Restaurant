<template >
  <div class="d-flex flex-column"  style="padding:0; background-color: white; overflow-y: auto;"  >
    <h1 >Zamówienie dla stolika {{choosedTable.id}} </h1>
    <div class=" m-0 d-flex justify-content-center  flex-wrap align-content-center">
      <category v-for="cat in categories" :key="cat" :categoryName="cat"  @catoegory="choosedCategory = $event" />
    </div>

    <div  class=" m-0 row mb-5" >
      <div class="row w-100">
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
import {mapState, mapGetters, mapActions} from 'vuex'
import category from './Order/Category.vue'


//vueWindowSizeMixin
export default {
  name:"order",
  data:function() {
    return {
      choosedCategory: "",
      order: [],
    }
  },
  methods: {
    sendOrder: function() {
      if(this.order.length >0){
        this.updateTableOrder({"order":this.order});
      }

    },
    finishOrder: function() {
      this.order= [];
      this.clearTableOrder();
    },
    showMsgBox() {
       this.$bvModal.msgBoxConfirm('Czy zamówienie na pewno zostało wydane?')
         .then(value => {
           if(value) this.finishOrder();
         })
     },
     ...mapActions(['updateTableOrder','clearTableOrder'])
  },
  computed:{
      productList: function() {
        let pr= this;
        return this.products.filter((x) => { if(x.category == pr.choosedCategory){return x}})
      },

    ...mapState([
      'categories',
      'products',
    ]),
    ...mapGetters([
      'getTableById',
      'choosedTable'
    ])
  },
  watch: {
   choosedTable: function(to) {
         // this.choosedTable =  this.getTableById(to);
         this.order=  this.choosedTable.order;
         this.choosedCategory= this.categories[0];
   }
 },
  created: function() {
    this.choosedCategory= this.categories[0];
  },
  components: {
    category,
    product
  }

}
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  h1{
    font-size: 2rem;
  }
}
</style>
