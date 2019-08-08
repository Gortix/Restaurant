<template>
  <button class="btn btn-block m-1" @click="$store.commit('changeChoosedTable',tableNumber)" :class="getStatus" >
     <span class="badge badge-pill badge-light">{{tableNumber}}</span>
      {{assignedTo}}
  </button>
</template>

<script>
export default {
  name: "restaurantTable",

  props: {
    startData:Object
  },
  computed: {
    getStatus: function(){
      return {
        "btn-outline-success": this.assignedTo != ''
      }
    },
    tableNumber: function() {
      return this.startData.id;
    },
    assignedTo: function() {
      return this.startData.assignedTo;
    }
  },


}
</script>

<style scoped>
  .btn:not(.btn-outline-success) {
    border: 0.5px solid lightGrey;
  }



</style>
