<template>
  <div id="app"  >
    <router-view></router-view>
  </div>

</template>

<script>
import { vueWindowSizeMixin } from 'vue-window-size';
import Router from 'vue-router';



export default {
  name: 'app',
  data: function() {
    return{
      user: "",
    }
  },
  created: function() {
    if(!this.user ){
      this.$router.push("/");
    }
  },
  watch:{
    user: function( newVal, oldVal) {
      if(!newVal){

        this.$router.push("/");
      }else{
          this.$router.push("/app");
      }
    },
    $route: function( newVal, oldVal) {
      if(!this.user ){
        this.$router.push("/");
      }
    }
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
