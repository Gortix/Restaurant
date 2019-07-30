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
  // render: function(createElement, context) {
  //   console.log(context);
  //   let data =  {
  //
  //         userName:'user',
  //         userPass: 'pass',
  //         show: false
  //
  //   };
  //
  //   let childrens=[];
  //   let login= createElement('input', {
  //     domProps:{
  //       className: 'form-control',
  //       placeholder: "Login",
  //     },
  //     on:{
  //       input: (e) => {data.userName= e.target.value}
  //     }
  //   });
  //
  //   let pass= createElement('input', {
  //     domProps:{
  //       className: 'form-control',
  //       placeholder: "Password"
  //     },
  //     on:{
  //       input: (e) => {data.userPass= e.target.value}
  //     }
  //   });
  //
  //   let warningSpan = createElement('span',{
  //     domProps:{
  //       innerHTML: 'Nieprawidłowy login lub password!',
  //     },
  //   });
  //
  //   let warning= createElement('div',{
  //     class:{
  //       // wrongPass
  //     }
  //   });
  //     let okButton= createElement('button',{
  //       domProps:{
  //         className: 'btn btn-info btn-block ',
  //         innerHTML: "Login"
  //       },
  //       on:{
  //         click: ()=>{context.listeners.user(data.userName)}
  //       }
  //     });
  //   childrens.push(login);
  //   childrens.push(pass);
  //   childrens.push(okButton);
  //
  //   return createElement('div',{
  //     domProps:{
  //       className: 'm-auto p-5 shadow border ',
  //     },
  //     on: {
  //       keyup: (e)=>{if(e.keyCode != 13) }
  //     },
  //     data : function() {
  //         return {
  //           userName:'user',
  //           userPass: 'pass',
  //           show: false
  //         }
  //     },
  //   },childrens);
  // },
  mixins: [getData],
  data : function() {
      return {
        userName:'user',
        userPass: 'pass',
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
  /* input {
    margin-bottom: 10px;
  }
  button {
    margin-top: 50px;
  } */
</style>
