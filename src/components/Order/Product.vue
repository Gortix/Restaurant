<template >

      <div  class="custom-control custom-checkbox col-12 col-sm-6 col-md-4"  >
          <input type="checkbox" class="custom-control-input m-2" :id="prod" :value="prod" v-model="$parent.order" >
          <label class="custom-control-label w-100 p-2" :for="prod">{{prod}}</label>
      </div>

</template>

<script>
export default {

  name: "product",
  props:{
    prod:String,
  },


}
</script>

<style scoped>
  div {
        text-align: left;
      padding-left: 50px;
      border-bottom : 0.1px solid lightGrey;
  }
  .custom-control-label::after {
    margin: .5rem
  }
  .custom-control-label:before {
    margin: .5rem
  }

</style>
