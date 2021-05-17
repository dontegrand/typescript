<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>vue 3 + vite 2</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
