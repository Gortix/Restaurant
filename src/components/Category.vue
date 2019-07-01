<template >
  <button class="col-4 col-md-3 col-lg-2 btn btn-light" @click="$parent.choosedCategory = categoryName" >
    {{categoryName}}
  </button>
</template>

<script>
export default {
  name: "category",
  props:{
    categoryName:String
  }
}
</script>
