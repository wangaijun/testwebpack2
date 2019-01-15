<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { a } from "../utils/util.js";

export default {
  name: 'About',
  mounted () {
    console.log(`a.b = ${a.b}`)
  }
}
</script>

