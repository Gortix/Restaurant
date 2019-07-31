<template >
  <div class="row">
    <responseMenu class="col-1 col-sm-3 col-lg-2" @chosedTable="tableNumber= $event"> </responseMenu>
    <order  class="col-11 col-sm-9 col-lg-10" :tableid="tableNumber" />
  </div>
</template>

<script>
import responseMenu from './Main/ResponseMenu'
import order from './Main/Order'

export default {
  data: function(){
    return {
      tableNumber:1
    }
  },
  components: {
    responseMenu,
    order
  }

}
</script>

<style scoped>
div {
  height:100%;
  margin: 0;
}


</style>
