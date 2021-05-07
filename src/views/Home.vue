<template>
 <div id="Home">


   
    
     <h1> WELCOME TO </h1>
    

     <v-row>
       <v-row cols="12" md="5"></v-row>
       <v-row 
       cols="12" md="7">
 
          <v-img 
          contain
          height="90"
          src="../assets/emma-logo-7.png"
          class="my-profil "
          
        ></v-img>
       </v-row>
     </v-row>
    
  
    

     <Hero/> 
 </div>
 
 
</template>



<script>
import Hero from '../components/Hero';

export default {
    name: 'Home',
    components: { 
      Hero
    },
    data() {
        return { 
          sideNav: false
          
        }
    }
  };
</script>

<style >

h1 {
  color: #1be7ff;
  text-align: start;
  font-size: 100px;
  padding: 10px;
  margin-top: 200px;
  font-family: Arial, Helvetica, sans-serif;
}

img{
  text-align: center;
  margin-top: 20px;
}

</style>
<style scoped>
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 50px;
  }
   
      
  }

</style>
