<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div>
      <button @click="changeMessage()">changeMessage</button>
    </div>
    <div>message: {{message}}</div>
    <div>reversedMessage: {{reversedMessage}}</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello'
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log("params", this.$route.params.key);
    console.log("query",this.$route.query.key);
  },
  methods: {
    changeMessage() {
      this.message = "World";
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
}
</script>
