<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{count}}
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>
