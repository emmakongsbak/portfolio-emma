<template>
<v-row>
    <v-col
      v-for="n in items"
      :key="n"
      class="d-flex child-flex"
      cols="12" sm="6" md="4" lg="3"
    >
      <v-img
        contain
        max-height="250"
        max-width="250"
        :src="n.imgUrl"
        aspect-ratio="1"
        class="my-style"  
      >
        
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>

  
</template>

<script>
export default {
     name: 'Photo',

    data() {
        return { 
        items: [
          {
            imgUrl: require("@/assets/me-14.jpg")
          },
          
          {
            imgUrl: require("@/assets/2 bestik emma-.jpg")
          },
          {
            imgUrl: require("@/assets/me-82.jpg")
          },
          {
            imgUrl: require("@/assets/produkt i miljø emma 2.jpg")
          },
          {
            imgUrl: require("@/assets/me-83.jpg")
          },
          {
            imgUrl: require("@/assets/vin & glas emma 3.jpg")
          },
          {
            imgUrl: require("@/assets/1 bella.jpg")
          },
          {
            imgUrl: require("@/assets/emma-18.jpg")
          },
          {
            imgUrl: require("@/assets/emma-magasin-19.jpg")
          },
          {
            imgUrl: require("@/assets/emma-magasin-1.png")
          },
          {
            imgUrl: require("@/assets/IMG_0324.jpg")
          },
          {
            imgUrl: require("@/assets/IMG_9931.jpg")
          },
          {
            imgUrl: require("@/assets/papa.jpg")
          },
          {
            imgUrl: require("@/assets/me3.jpg")
          },
          {
            imgUrl: require("@/assets/em-bel-5.jpg")
          },
          {
            imgUrl: require("@/assets/me-22.jpg")
          },
          {
            imgUrl: require("@/assets/rose2.jpg")
          },
          {
            imgUrl: require("@/assets/emma-magasin-8.jpg")
          },
          {
            imgUrl: require("@/assets/me-1.jpg")
          }
          
         ]
        };
    }
  };
</script>

<style>

.my-style {
  height: 300px;
  width: 200px;
}

</style>