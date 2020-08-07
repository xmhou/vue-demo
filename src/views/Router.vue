<template>
    <div>
        <h1>This is a router page</h1>
        <div>
            <button @click="gotoByName()">使用name实现跳转</button> 
            <button @click="gotoByPath()">使用path实现跳转</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Router',
  methods: {
      gotoByName() {
          this.$router.push({name: 'Home', params: {key: 'abc'}})
      },
      gotoByPath() {
          this.$router.push({path: '/', query:{key: 'abc'}})
      }
  }
}
</script>
