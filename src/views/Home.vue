<template>
  <div class="home">
    
  </div>
</template>

<script>
import { a } from "../utils/util.js";
export default {
  name: 'home',
  components: {
  },
  mounted(){
    let user = {username:'15175295644',
                password:'29681zhang',
    }
    this.$axios
      .post('api/v1/account/login',user)
      .then(r=>console.log(r))
      .catch(e=>console.log(e))

    a.b = "100"
    console.log(`a.b = ${a.b}`);
  },
}
</script>

<style lang="less" scoped>
.home{}
</style>
