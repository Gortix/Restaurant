<template>
  <div class="m-auto p-5 shadow border "  @keyup.enter="checkPass">
      <input placeholder="Login" type="text" class="form-control" v-model="userName">
    <br>
      <input placeholder="Password" type="password" class="form-control" v-model="userPass">
      <br>
      <br>
    <div :class="wrongPass ">
        <span v-show="show" >Nieprawidłowy login lub password!</span>
    </div>
    <button class="btn btn-info btn-block" type="button" name="button" @click="checkPass"> Login </button>
  </div>

</template>

<script>
import {getData} from '../mixins/getData.js'


export default {
  mixins: [getData],
  data : function() {
      return {
        userName:'',
        userPass: '',
        show: false
      }
  },
  methods: {
    checkPass: function() {
      //TO BE DELETED
      if(this.readTextFile("./data/users.json")[this.userName] == this.userPass){
        this.$emit("user", this.userName );
      }else{
        this.show= true;
      }

    }
  },
  computed: {
    wrongPass: function() {
      var pr= this;
      return{
        "alert-danger" : pr.show,
        "alert": pr.show,
        "p-1": pr.show
      }
    }
  }
}
</script>

<style scoped>

</style>
