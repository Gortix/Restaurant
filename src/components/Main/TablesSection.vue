<template >
  <div  >
      <h2> Stoliki </h2>
      <br>
          <input type="number" min=0  name="Searcher" class="form-control ml-1" v-model="search" placeholder="Search" />
        <restaurantTable v-for="nm in serchedTables" :key="nm.id" :startData='nm' @chosedTable="$emit('chosedTable', $event)"  />
  </div>
</template>

<script>
import restaurantTable from './TablesSection/RestaurantTable'
import { vueWindowSizeMixin } from 'vue-window-size';
import { Service } from '../../assets/service';

export default {
  mixins: [ vueWindowSizeMixin],
  name: "tablesSection",

  data: function() {
    return{
      tableNumber:1,
      search: null,
      availableTables: []
    }
  },
  computed: {
    serchedTables: function(){
      if(this.search){
        return this.availableTables.filter(x =>  x.id == this.search);
      }else{
        return this.availableTables;
      }
    }

  },
  created: function(){
    this.availableTables=Service.getTables();
  },
  components :{
    restaurantTable,
  }
}
</script>

<style  scoped>
  div {
    border-right: 1px solid lightGrey;
    padding: 0px 10px 0px 0px;
    overflow-y: auto;
    background-color: white;
    max-height: 100%;
    z-index: 2; /* Stay on top */
  }
</style>
