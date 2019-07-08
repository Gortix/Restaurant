<template >
  <div >
      <h2> Stoliki </h2>
      </br>
          <input type="number"  name="Searcher" class="form-control ml-1" v-model="search" placeholder="Search" />
        <restaurantTable v-for="nm in serchedTables" :key="nm.id" :startData='nm' @chosedTable="$emit('chosedTable', $event)"  />
  </div>
</template>

<script>
import restaurantTable from './RestaurantTable.vue'
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [ vueWindowSizeMixin],
  name: "tablesSection",
  components :{
    restaurantTable,
  },
  data: function() {
    return{
      tableNumber:1,
      search: null,
    }
  },
  props: {
    availableTables: Array
  },
  computed: {
    serchedTables: function(){
      if(this.search){
        return this.availableTables.filter(x =>  x.id == this.search);
      }else{
        return this.availableTables;
      }
    }

  }
}
</script>

<style  scoped>
  div {
    border-right: 1px solid lightGrey;
    padding: 0px 10px 0px 0px;
    overflow-y: auto;
    background-color: white;
    z-index: 2; /* Stay on top */
  }
</style>
