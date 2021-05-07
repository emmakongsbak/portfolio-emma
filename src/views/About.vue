<template>
    <v-content> 

     <v-col columns="12"  style="display:flex; justify-content:center">
          <v-img 
          contain
          height="400"
          width="400"
          src="../assets/emma-tape-4.png"
          class="my-profil "
          
        ></v-img>
     </v-col>
       
     
        <v-row>
        <v-col cols="9" md="9">
          <v-row>
            <v-col md="3"> </v-col>
            <v-col cols="12" md="9">

              <v-btn flat color="button-1 pink lighten-2 white--text pa-4">
                     <v-icon> mdi-instagram </v-icon>
                      <v-span> 
                      <a href="https://www.instagram.com/emmaholm533/" class="text-decoration-none ms-4">
                       <b> Follow me </b> </a> 
                       </v-span>
               </v-btn>

                <v-btn flat color="pink lighten-2 white--text">
                <v-icon> mdi-linkedin </v-icon>
                    <v-span> 
                    <a href="https://www.linkedin.com/in/emma-holm-kongsbak-332065206/" class="text-decoration-none ms-4">
                    <b> Add me here </b> 
                    </a> 
                    </v-span>
                </v-btn>

                <v-btn flat color="pink lighten-2 white--text">
                <v-icon> mdi-youtube </v-icon>
                    <v-span> 
                    <a href="https://www.youtube.com/watch?v=_9zyQSSnWfY" class="text-decoration-none ms-4">
                    <b> Watch video cv </b> 
                    </a> 
                    </v-span>
                  </v-btn>

                <v-btn color="pink lighten-2 white--text" href="../assets/Emma-cv.pdf" target="_blank"> 
                  <v-icon> mdi-note </v-icon>
                      <v-span>
                        <b> View CV </b> 
                       </v-span>
                      </v-btn>     

                      <v-btn flat color="pink lighten-2 white--text" target="_blank"> 
                  <v-icon> mdi-phone </v-icon>
                      <v-span>
                        <b> 22 33 01 46 </b> 
                       </v-span>
                      </v-btn>  

                       <v-btn flat color="pink lighten-2 white--text" target="_blank"> 
                  <v-icon> mdi-mail </v-icon>
                      <v-span>
                        <b> ek@design.dk </b> 
                       </v-span>
                      </v-btn> 


              </v-col>
              </v-row>
               </v-col>
            
              <v-col md="7"> </v-col> 
              </v-row> 

               <v-row>
        <v-col cols="9" md="10">
          <v-row>
            <v-col md="3"> </v-col>
            <v-col cols="12" md="7">

                <p class="container-1 pa-2 ">Hej Jeg hedder Emma Holm Kongsbak, jeg er 22 år og er multimediedesigner. Jeg har en pasion for produkt- og portrætfotografering og grafisk design. Jeg har også erfaring indefor billederedigering i Adobe PS og i Capture One.
                Jeg holder til i Esbjerg. </p>
                
            </v-col>
          </v-row>
            </v-col>
            
            <v-col md="7"> </v-col> 
              </v-row>
        
        
     </v-content>
  
</template>


<script>
  

</script>


<style> 
.my-profil {
  height: 300px;
  width: 263px;
}

.container-1  {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  color: rgb(255, 255, 255);
}
.button-1 {
  padding-left:10px;
}

</style> 



