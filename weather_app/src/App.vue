<template>
  <ion-app>
    <!-- <toolbar></toolbar> -->
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import Toolbar from '@/components/Toolbar.vue'
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    // Toolbar
  }
});
</script>