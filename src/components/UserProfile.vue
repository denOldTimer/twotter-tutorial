<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong>{{ followers }}
      </div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>

        <div class="user-profiel__create-twoot-type">
          <label for="newTwootType"><strong>Type</strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option
              :value="option.value"
              v-for="(option, index) in twootTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button>Twoot!</button>
      </form>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from './TwootItem';
export default {
    name:"UserProfile",
    components: { TwootItem },
    data(){
    return {
        newTwootContent: '',
        selectedTwootType: 'instant', //default => instant
        twootTypes: [
            {value: 'draft', name: 'Draft'},
            {value: 'instant', name: 'Instant Twoot'}
        ],
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
    },
    toggleFavourite(id){
        console.log(`Favourite Twoot #${id}`)
    },
    createNewTwoot(){
        // If it it is a draft don't do anything
        if(this.newTwootContent && this.selectedTwootType !== 'draft'){
            this.user.twoots.unshift( {
                id: this.user.twoots.length + 1,
                content: this.newTwootContent
            })
            this.newTwootContent = ''
        }
    }
  },
  mounted(){
    this.followUser();
  }

}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background-color: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
    .user-profile__create-twoot {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
    }
  }
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}
</style>