 <template>
  <div id="app">
    <div id="nav">
      &nbsp;<router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>&nbsp;|&nbsp;
       <router-link v-bind:to="{ name: 'cookout-form'}">Create a new Cookout</router-link>
    </div>
    <router-view />
  </div>
</template>


<style>

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(105, 150, 172, 0.529);
   margin: 0;
  background-size: cover;
}
#nav {
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid gray;
  background-color: rgb(236, 243, 244);
  box-shadow: 2px 5px 10px 5px rgba(9,30,66,.25);
}

</style>