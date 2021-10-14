<template>
  <ion-page>
    <toolbar :search_active="true"></toolbar>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="(person, i_person) in personagens_computed" :key="i_person + 'persons'">{{person.name}}
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
    personagens_computed(){
      return this.personagens.filter(personagem => personagem['name'].toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  data(){
    return {
      personagens: []
    }
  },
  methods:{
    carregarDados(){
      api.get('/character')
      .then(r => {
        this.personagens = r.data.results
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {

      })
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