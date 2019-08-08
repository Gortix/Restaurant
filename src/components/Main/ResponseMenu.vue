<template >
  <div style="padding:0" :style="[startStyle]"  >

      <button v-show="screenIsSmall"   type="button" class=" btn btn-sm btn-light" @click=" clicked = true"  name="button"><b>||</b></button>
        <div class="shade" v-show="clicked && screenIsSmall " @click="clicked = false">
          <h4 > Close </h4>
        </div>
      <transition name="slide">
          <tablesSection v-show="clicked || !screenIsSmall"  :class="smallScreenMenu " :style="[startStyle]"  />
      </transition>

  </div>
</template>

<script>
import tablesSection from './TablesSection.vue'
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [ vueWindowSizeMixin],
  data: function() {
    return {
        clicked: false,
      startStyle: {
        "height": '100%',
        'max-height': this.windowHeight-10 +'px',
        'margin': '0',
      }
    }
  },
  computed: {
    smallScreenMenu: function() {
      if(this.screenIsSmall){
        return {
          smallScreen: true,
        }
      }
      return {};
    },
    screenIsSmall: function(){
      return this.windowWidth < 576;
    }
  },
  components: {
    tablesSection
  }
}
</script>

<style scoped>

h4{
  position: fixed; top: 50%; right: 10%; color: white
}

button {
  height: 100%;
   width: 100%;
}

.smallScreen{

  position: fixed;
  border-right: 1px solid lightGrey;
  top:0;
  max-width: 60%

}

.slide-enter , .slide-leave-to {
  transform: translateX(-100%);

}

.slide-leave-active, .slide-enter-active{
  transition: all 0.5s;
}

.shade {
  height:100%;
  width:100%;
  position: fixed;
  top:0;
  left:0;
  z-index:1;
  opacity: 0.5;
  background-color: black;
}

</style>
