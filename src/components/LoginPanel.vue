<template>
  <div class="m-auto p-5   align-content-center shadow border "  @keyup.enter="checkPass">
      <input placeholder="Login" type="text" class="form-control" v-model="userName">
    <br>
      <input placeholder="Password" type="password" class="form-control" v-model="userPass">
      <br>
      <br>
    <div  :class="wrongPass ">
        <span v-show="show" >Nieprawidłowy login lub hasło!</span>
    </div>
    <button class="btn btn-info btn-block " type="button" name="button" @click="checkPass"> Login </button>
  </div>

</template>

<script>
import {Service} from '../assets/service'


export default {
  data : function() {
      return {
        userName:'user',
        userPass: 'pass',
        show: false
      }
  },
  methods: {
    checkPass: function() {
      // console.log(Users.login(this.userName, this.userPass));
      let result= Service.login(this.userName, this.userPass);
      if(result){
          this.$parent.user= result;
      }else{
        this.show=true
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
@media only screen and (min-width: 500px) and (max-width: 800px){
  div{
    position: absolute;
    left:20%;
    right:20%;
  }
}
@media only screen and (min-width: 800px) {
  div{
    position: absolute;
    left:30%;
    right:30%;
  }
}

</style>
