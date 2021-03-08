<template>
  <div id="app">@{{ user.username }} - {{ fullname }}</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
     followers: 0,
     user: {
       id: 1,
       username: '_MitchellRomney',
       firstName: 'Mitchell',
       lastName: 'Romney',
       email: 'mitchellromney@tehearthissquare.com',
       isAdmin: true
     }
    }
  },
  computed:{
    fullname(){
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
