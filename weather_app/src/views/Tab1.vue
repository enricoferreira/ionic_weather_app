<template>
  <ion-page>
    <toolbar></toolbar>
    <ion-content :fullscreen="true">
      <explore-container>
      </explore-container>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage,IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {mapState} from 'vuex';
import Toolbar from '@/components/Toolbar.vue'

export default  {
  name: 'Tab1',
  components: { ExploreContainer,IonContent, IonPage, Toolbar},
  computed:{
    ...mapState(['title'])
  },
  data(){
    return {
      pesquisa: ''
    }
  },
  created(){
  }
}
</script>