<template>
  <button class="btn  btn-block my-1" @click="$emit('chosedTable', tableNumber)" :class="getStatus" >
     <span class="badge badge-pill badge-light">{{tableNumber}}</span>


      {{assignedTo}}
  <!--<div class="col-2 ">

        {{tableNumber}}

    </div>
    <div class="col-6">
      {{assignedTo}}
    </div>
    <div v-if="assignedTo != ''" class="col-3">
      <button class="btn btn-danger"> Przyjęto </button>
    </div>
    <div v-else class="col-3">
      <button class="btn btn-success" @click='$emit("chosedTable", tableNumber)'> Zamówienie </button>
    </div>
  -->
  </button>
</template>

<script>
export default {
  name: "restaurantTable",
  props: {
    tableNumber: Number,
    assignedTo: {
      type: String,
      default: ''
    }
  },
  computed: {
    getStatus: function(){
      // let obj= {};
      // if(assignedTo != ''){
      //   obj.class= 'danger';
      //   obj.name= "Przyjęto"
      // }else{
      //   if(assignedTo != ''){
      //     obj.class= 'success';
      //     obj.name= "Przyjęto"
      //   }
      // }

      return {
        "btn-danger": this.assignedTo != ''
      }
    }
  }
}
</script>

<style scoped>
  .btn {
    border-bottom: 1px solid lightGrey;
  }
  div {
    vertical-align: middle;
  }


</style>
