<template >
  <div >
      <h2> Stoliki </h2>
      <restaurantTable :tableNumber='1' @chosedTable="tableNumber = $event"  />

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
    tableNumber:23,
    name:"Daria"
  }}
}
</script>

<style  scoped>
  div {
    border-right: 1px solid lightGrey;
    padding: 0px;
    padding-right: 2px;
  }

</style>
