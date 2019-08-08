<template >
  <div  class="tblSec">
      <h2> Stoliki </h2>
      <br>
      <div class="input-group ml-1">

        <input type="number" min=0  name="Searcher" class="form-control" v-model="search" placeholder="Search" />
        <div class="input-group-append">
          <button class="btn btn-danger" @click="clear" type="button">&times;</button>
        </div>
      </div>
        <restaurantTable v-for="tbl in serchedTables" :key="tbl.id" :startData='tbl'  />
  </div>
</template>

<script>
import restaurantTable from './TablesSection/RestaurantTable'
import { vueWindowSizeMixin } from 'vue-window-size';
import {mapState} from 'vuex'


export default {
  mixins: [ vueWindowSizeMixin],
  name: "tablesSection",

  data: function() {
    return{
      tableNumber:1,
      search: null,

    }
  },
  methods:{
    clear: function() {
      this.search= null;
    }
  },
  computed: {
    serchedTables: function(){
      if(this.search){
        return this.availableTables.filter(x =>  x.id == this.search);
      }else{
        return this.availableTables;
      }
    },
    ...mapState({
      availableTables: (state) => state.tablesOrder
    })

  },

  components :{
    restaurantTable,
  }
}
</script>

<style  scoped>
  .tblSec {
    border-right: 1px solid lightGrey;
    padding: 0px 10px 0px 0px;
    overflow-y: auto;
    background-color: white;
    max-height: 100%;
    z-index: 2; /* Stay on top */
  }
</style>
