<template>
   
  <div class=" text--white header-nav ">
  
    <v-navigation-drawer class="deep-orange lighten-1 drak" temporary v-model="sideNav" style="z-index: 5000;">
          <v-list> 
            <v-list-tile >
              <v-list-title-action>
                <v-icon> mdi-home </v-icon>
              </v-list-title-action>
              <v-list-tile-content> home </v-list-tile-content>
              <router-link class="hidden-sm-and-down">home</router-link>
            </v-list-tile>
          </v-list>
          <v-list>
          <v-list-tile >
              <v-list-title-action>
                <v-icon > mdi-photoalbum </v-icon>
              </v-list-title-action>
              <v-list-tile-content > photo </v-list-tile-content>
            </v-list-tile>
          </v-list>
           <v-list>
          <v-list-tile >
              <v-list-title-action>
                <v-icon> mdi-brush </v-icon>
              </v-list-title-action>
              <v-list-tile-content> design </v-list-tile-content>
            </v-list-tile>
          </v-list>
            <v-list>
          <v-list-tile >
              <v-list-title-action>
                <v-icon> mdi-movie </v-icon>
              </v-list-title-action>
              <v-list-tile-content> video </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list>
          <v-list-tile >
              <v-list-title-action>
                <v-icon> mdi-contacts </v-icon>
              </v-list-title-action>
              <v-list-tile-content> contact </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>

      <v-toolbar app dark class="deep-orange lighten-1 pr-3 header-nav" >
        
        <v-app-bar-nav-icon @click="toggleNav" 
        class="hidden-md-and-up">
         </v-app-bar-nav-icon>
        <v-toolbar-title> 
          <router-link to="/" tag="span" style="cursor: pointer"> EK DESIGN </router-link>
          </v-toolbar-title>
    <v-spacer> </v-spacer>
        
        <router-link class="hidden-sm-and-down"  to="/">home</router-link>

         <router-link class="hidden-sm-and-down" to='/photo'>photo</router-link>
   

          <router-link class="hidden-sm-and-down" to='/design'>design</router-link>


           <router-link class="hidden-sm-and-down" to='/video'>video</router-link>
       
           <router-link class="hidden-sm-and-down" to='/about'>contact</router-link>
           
        </v-toolbar>    
     
  </div>
    
</template>

<script>

export default {
    name: 'Header',

    data() {
        return { 
          sideNav: false
          
        }
    },
    methods: {
      toggleNav() {
        this.sideNav = !this.sideNav;
        console.log(this.sideNav);
      }
    }
  }; 
    

</script>

<style lang="scss">

.header-nav {
  height: 0px;
  padding-top:0px;
  margin-bottom:10px ;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 23px;
  
  a {
    text-decoration: none;
    
    &.router-link-exact-active, a.router-link-active {
    color: #1be7ff   !important
    }
     padding: 0px 20px;
  }
}

.v-application a {
  color:rgb(255, 249, 249) !important;
}

.v-toolbar__content {
  padding:0 !important;
}
.router-link {
   & > .routerlink {
  display: block;
  color: rgb(255, 255, 255)
}
  
}




</style>