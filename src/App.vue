<template>
  <div id="app" class="row" >
    <loginPanel v-if="user == '' " @user="user = $event" />
    <template v-else>
      <responseMenu :availableTables="availableTables"  class="col-1 col-sm-3 col-lg-2" @chosedTable="tableNumber= $event"> </responseMenu>
      <order  class="col-11 col-sm-9 col-lg-10" :choosedTable="getTableOrder" />
    </template>

  </div>

</template>

<script>

import order from './components/Order.vue'
import loginPanel from './components/LoginPanel.vue'
import responseMenu from './components/ResponseMenu.vue'
import {getData} from './mixins/getData.js'
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [getData, vueWindowSizeMixin],
  name: 'app',
  data: function() {
    return{
      availableTables: {},
      tableNumber:1,
      user: "",

    }
  },
  computed:{
    getTableOrder : function(){
      let pr= this;
      return this.availableTables.find((x) => {return x.id==pr.tableNumber })
    },

  },
  created: function() {
    this.availableTables= this.readTextFile("./data/tables.json").tables;
  },
  components: {
    order,
    loginPanel,
    responseMenu
  }
}
</script>

<style>
html,body{
    height:100%;
    scrollbar-width: none;
}

#app {
  height:95%;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

div {
  scrollbar-width: none;
}

::-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}



</style>
