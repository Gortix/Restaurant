<template >
  <div >
      <h2> Stoliki </h2>
      <restaurantTable v-for="nm in availableTables" :key="nm.id" :startData='nm' @chosedTable="$parent.tableNumber = $event"  />
  </div>
</template>

<script>
import restaurantTable from './RestaurantTable.vue'

export default {
  name: "tablesSection",
  components :{
    restaurantTable,
  },
  data: function() {
  return{
    tableNumber:1,
  }},
  props: {
    availableTables: Array
  }
}
</script>

<style  scoped>
  div {
    border-right: 1px solid lightGrey;
    padding: 0px;
    padding-right: 2px;
  }

</style>
