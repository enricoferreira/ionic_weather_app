<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 4 </ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer :name="'Tab 4 page' + title" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {mapState} from 'vuex';

export default  {
  name: 'Tab4',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  computed:{
    ...mapState(['title'])
  },
  created(){
  }
}
</script>