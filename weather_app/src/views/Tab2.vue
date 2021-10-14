<template>
  <ion-page>
    <toolbar :search_active="true"></toolbar>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="(local, i_local) in locais_computed" :key="i_local + 'locals'">{{local.name}}
        </ion-item>
        <ion-item v-if="prox != 0" button @click="carregarMaisDados">
          <ion-label color="primary">
            Ver mais
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-router-outlet />
    </ion-content>
  </ion-page>
</template>

<script>
import {IonRouterOutlet,IonPage,IonContent} from '@ionic/vue';
// import { idCard } from 'ionicons/icons';
import {mapState} from 'vuex';
import Toolbar from '@/components/Toolbar.vue'
import {api} from '@/service/service.js'
export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, Toolbar, IonRouterOutlet},
  computed:{
    ...mapState(['title', 'search']),
    locais_computed(){
      return this.locais.filter(local => local['name'].toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  data(){
    return {
      locais: [],
      prox: '',
    }
  },
  methods:{
    carregarMaisDados(){
      api.get('/location?page=' + this.prox)
      .then(r => {
        this.resolveData(r)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {

      })
    },
    carregarDados(){
      api.get('/location')
      .then(r => {
        this.resolveData(r)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {

      })
    },
    resolveData(r){
      this.locais.push(...r.data.results);
      this.prox = r.data.info.next != null ? r.data.info.next.split('page=')[1] : 0;
    }
  },
  created(){
    this.carregarDados()
  }
}
</script>
<style>
.v-enter-active, .v-leave-active{
  transition: all 1.3s;
}

.v-enter, .v-leave{
  opacity: 0;
  transform: translateY(100px);
}
</style>