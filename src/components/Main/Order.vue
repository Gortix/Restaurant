<template >
  <div class="d-flex flex-column"  style="padding:0; background-color: white; overflow-y: auto;"  :style="{'max-height': windowHeight +'px' }">
    <h1 >Zamówienie dla stolika {{choosedTable.id}}</h1>
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
import {Service} from '../../assets/service'
import category from './Order/Category.vue'


//vueWindowSizeMixin
export default {
  name:"order",
  data:function() {
    return {
      choosedCategory: "",
      products: [],
      categories:[],
      order: [],
      choosedTable: {}
    }
  },
  props:{
    tableid: {type:Number, default:1}

  },
  methods: {
    sendOrder: function() {
      if(this.order.length >0){
        this.choosedTable.order= this.order;
        // this.choosedTable.assignedTo= this.$parent.user;
        this.choosedTable.assignedTo= this.$parent.$parent.user;


      }

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
    },
  },
  watch: {
   choosedTable: function (newVal, oldVal) {
     if(newVal.id != oldVal.id)
      this.order= newVal.order;
   },
   tableid: function(to, from) {
         this.choosedTable =  Service.getTables().find((x) => {return x.id==to  });
   }
 },
  created: function() {
    this.categories= Service.getCategories();
    this.products=  Service.getProducts();
    this.choosedCategory= this.categories[0];
    this.choosedTable= Service.getTables().find((x) => {return x.id==this.tableid  });

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
