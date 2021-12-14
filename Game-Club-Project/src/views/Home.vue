<template>
  <div class="home">

    <h1 id="welcome-message">Welcome {{this.$store.state.user.username}}</h1>
    <p>This is your home page!</p>

    <div class="cookout-columns">

      <div class="hosted-cookouts">

        <h3 id="my-cookouts-title"> My Cookouts </h3>

        <div class="my-cookouts"
         v-for="cookout in this.$store.state.myCookouts"
            v-bind:cookout="cookout"
            v-bind:key="cookout.id"
            v-on:click="toCookout(cookout.id)"
            >

            <CookoutCard
            v-bind:cookout="cookout"
            v-bind:key="cookout.id"
            v-on:click="toCookout(cookout.id)"
            />
        </div>

          <router-link v-bind:to="{ name: 'cookout-form'}">Create a new Cookout</router-link>

      </div>

      <div class="invited-cookouts">

        <h3 id="attending-cookouts-title">Attending Cookouts </h3>
        
          <div v-bind:cookout="cookout"
            v-for="cookout in this.$store.state.attendingCookouts" 
            v-bind:key="cookout.id"
            v-on:click="toCookout(cookout.id)">

            <cookout-card class="attending-cookouts"
            v-bind:cookout="cookout"
            v-bind:key="cookout.id"/>

          </div>

    </div>

    <div class="pending-invites">

      <h3 class="pending-invite-title">Pending invites</h3>

      <div v-for="invite in this.$store.state.pendingInvites"
          v-bind:invite="invite"
          v-bind:key="invite.cookoutId"
          v-show="invite.statusId === 2" >

        <pending-invite class="cookout-invites"
          v-bind:invite="invite"
          v-bind:key="invite.cookoutId"
          v-show="invite.statusId === 2" 
          />
      </div>

    </div>

  </div>
  </div>
</template>

<script>
import CookoutCard from '@/components/CookoutCard'
import PendingInvite from '@/components/PendingInvite'
import CookoutService from "../services/CookoutService"
import InviteService from '../services/InviteService'

export default {
  name: "home",
  data() {
    return {
      isHovering: false
    }
  },
  methods: {
    toCookout(cookoutId) {
      this.$router.push("/cookout/" + cookoutId)
    }
  },
  components: {
    CookoutCard,
    PendingInvite
  },
  created() {
    CookoutService
     .getAllCookouts()
     .then(response => {
       const allCookouts = response.data
       this.$store.commit('SET_ALL_COOKOUTS', allCookouts)

       InviteService
    .listPendingInvites(this.$store.state.user.id)
    .then(response => {
      const invites = response.data
      if(this.$store.state.tempInvite !== {}) {
        invites.push(this.$store.state.tempInvite)
      }
      this.$store.commit('SET_PENDING_INVITES', invites)
    });
     });
    CookoutService
    .getMyCookouts(this.$store.state.user.id)
    .then(response => {
      const myCookouts = response.data
      this.$store.commit('SET_MY_COOKOUTS', myCookouts)
    });
    CookoutService
    .getAttendingCookouts(this.$store.state.user.id)
    .then(response => {
      const cookouts = response.data
      this.$store.commit('SET_ATTENDING_COOKOUTS', cookouts)
    });
  }
};
</script>

<style>

div.home {
  text-align: center;
  background-image: radial-gradient(rgb(234, 239, 255), rgba(238, 238, 255, 0.625));
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 0 12%;
  min-height: 100vh;
}

#welcome-message {
  margin-top: 0;
}

.cookout-columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}

.hosted-cookouts {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
  margin: 20px;
  padding: 10px;
  background-color: aliceblue;
  box-shadow: 2px 5px 10px 5px rgba(9,30,66,.25);
}

#my-cookouts-title {
  text-align: center;
}

.my-cookouts {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px;
  background-color: rgb(227, 227, 227);
  box-shadow: 2px 5px 5px 2px rgba(9,30,66,.25);
  cursor: pointer;
}

.invited-cookouts {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
  margin: 20px;
  padding: 10px;
  background-color: aliceblue;
  box-shadow: 2px 5px 10px 5px rgba(9,30,66,.25);
}

#attending-cookouts-title {
  text-align: center;
}

.attending-cookouts {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px;
  background-color: rgb(227, 227, 227);
  box-shadow: 2px 5px 5px 2px rgba(9,30,66,.25);
  cursor: pointer;
}

.pending-invites {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
  margin: 20px;
  padding: 10px;
  background-color: aliceblue;
  box-shadow: 2px 5px 10px 5px rgba(9,30,66,.25);
}

.cookout-invites {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px;
  background-color: rgb(230, 230, 230);
  box-shadow: 2px 5px 5px 2px rgba(9,30,66,.25);
}



div.my-cookouts:hover {
  background-color: rgb(210, 210, 210);
}

div.attending-cookouts:hover {
  background-color: rgb(210, 210, 210);
}

.cookout-invites:hover {
  background-color: rgb(210, 210, 210);
}

</style>
