<template >

      <div  class="custom-control custom-checkbox col-12 col-sm-6" >
          <input type="checkbox" class="custom-control-input" :id="prod" :value="prod" v-model="$parent.choosed" >
          <label class="custom-control-label" :for="prod">{{prod}}</label>
      </div>

</template>

<!-- <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
    <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
  </div> -->

<script>
export default {
  name: "product",
  props:{
    prod:String,
    checked: String,
  },
  methods: {

  },
  computed:{
    changeListener: function(){
      let vm= this;
      return Object.assign({},  this.$listeners,{
        input: function(event){
          console.log(v.target);
          vm.$emit("input", vm.value.push(event.target.value))
        }}
      )
    }
  },
  data:function() {

    return {
    order:[]
  }
}

}
</script>

<style scoped media="screen">
  div {
        text-align: left;
      padding-left: 50px;
  }

</style>
