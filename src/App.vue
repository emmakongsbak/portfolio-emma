<template>
  <v-app class="black">
 
  <Header/>
   
    <v-content>
      <router-view> </router-view>

   
       
    </v-content>

    
        
  </v-app>

</template>

<script>
import Header from './components/Header';




export default {
  name: 'App',

  components: { 
    Header,

   },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-image: url('./assets/background-4.jpg');
  background-size: cover;
}
header { 
  height: 56px !important;
}
.v-main {
  margin-top:50px;
}
.router-link-exact-active, .router-link-active {
  color: #1be7ff
}
</style>