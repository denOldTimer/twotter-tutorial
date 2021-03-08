<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong>{{ followers }}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <div
        class="user-profile__twoot"
        v-for="twoot in user.twoots"
        :key="twoot.id"
      >
        {{ twoot.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"UserProfile",
    data(){
    return {
     followers: 0,
     user: {
       id: 1,
       username: '_MitchellRomney',
       firstName: 'Mitchell',
       lastName: 'Romney',
       email: 'mitchellromney@tehearthissquare.com',
       isAdmin: true,
       twoots: [
           {id:1, content: "Twotter is Amazing!"},
           {id:2, content: "Don't forget to subscribe to The Earth Is Square!"}
       ]
     }
    }
  },
  /**
   *  Watch generally used for server changes ex. notifications
   */
  watch:{
    followers(newFollowerCount, oldFollowerCount){
      if( oldFollowerCount > newFollowerCount){
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed:{
    fullname(){
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
   methods: {
    followUser(){
      this.followers++;
    }
  },
  mounted(){
    this.followUser();
  }

}
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}
.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

.user-profile__admin-badge {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}

h1 {
  margin: 0;
}
</style>