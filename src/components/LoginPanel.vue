<template>
  <div id="login" class="m-auto p-5   align-content-center shadow border "  @keyup.enter="checkPass">

      <input placeholder="Login" type="text" class="form-control" v-model="userName">
    <br>
      <input placeholder="Password" type="password" class="form-control" v-model="userPass">
      <br>
      <br v-show="!show">
      <div  :class="wrongPass ">
          <span v-show="show" >Nieprawidłowy login lub hasło!</span>
      </div>
    <button class="btn btn-info btn-block " type="button" name="button" @click="$store.dispatch('login',loginObj())"> Login </button>
  </div>

</template>

<script>


export default {
  data : function() {
      return {
        userName:'user',
        userPass: 'pass',
        show: false
      }
  },
  methods: {
    loginObj(){
      return {"nick":this.userName, "pass": this.userPass}
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
  #login{
    position: absolute;
    left:20%;
    right:20%;
  }
}
@media only screen and (min-width: 800px) {
  #login{
    position: absolute;
    left:30%;
    right:30%;
  }
}

</style>
