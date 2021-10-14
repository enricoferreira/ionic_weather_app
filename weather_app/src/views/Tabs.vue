<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar color="primary" slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="peopleCircle" />
          <ion-label>Personagens</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2"  href="/tabs/tab2">
          <ion-icon :icon="location" />
          <ion-label>Locais</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="tv"></ion-icon>
          <ion-label>Episódios</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { peopleCircle, location, tv } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      peopleCircle, 
      location,
      tv
    }
  }
}
</script>