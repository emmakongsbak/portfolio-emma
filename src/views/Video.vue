<template>
  <v-row>
    <v-col
       v-for="n in items"
      :key="n"
      class="d-flex child-flex"
      cols="12" sm="6" md="4" lg="3"
    >
        <video width="100%" height="315" controls class="my-video pt-13 ms-10 d-flex flex-row-reverse">
        <source :src="videoURL" type="video/mp4">


</video>
  
    </v-col>
 
  </v-row>
</template>

<script>
export default {
     name: 'Video',

    data() {
        return { 
         // videoURL: require("@/assets/promo-pepsi0.mp4"),
        items: [
          {
            imgUrl: require("@/assets/promo-pepsi0.mp4")
          },
          
         ]
        };
    }
  };
</script>

<style>

</style>