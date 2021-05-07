<template>
  <div class="design">

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
        class=" ma-5 my-graphic" 
      >
        <template v-slot:placeholder>
          <v-row
            class=" ma-0"
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

  </div>
</template>

<script>
export default {
     name: 'Design',

    data() {
        return { 
        items: [
          {
            imgUrl: require("@/assets/idea-house-1.png")
          },
          {
            imgUrl: require("@/assets/logo.png")
          },

          {
            imgUrl: require("@/assets/iPhone 6 sign up.png")
          },
          {
            imgUrl: require("@/assets/waves-poster.png")
          }

         ]
        };
    }
  };
</script>

<style> 
.my-graphic {
  height: 300px;
  width: 200px;
}

</style> 
