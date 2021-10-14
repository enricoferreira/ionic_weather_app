<template>
  <ion-page>
    <toolbar :search_active="true"></toolbar>
    <ion-content :fullscreen="true">
      <ion-list v-if="!ui_information_type_card">
        <ion-item v-for="(person, i_person) in personagens_computed" :key="i_person + 'persons'">{{person.name}}
        </ion-item>
      </ion-list>
      <ion-grid v-else>
        <ion-row>
          <ion-col size="6" v-for="(person, i_person) in personagens_computed" :key="i_person + 'persons_card'">
            <ion-card >
              <img style="width: 100%" :src="person.image" alt="">
              <ion-card-header>
                <ion-card-subtitle>{{person.species}}</ion-card-subtitle>
                <ion-card-title>{{person.name}}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{person.status}}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonRow, IonCol, IonGrid, IonPage,IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem} from '@ionic/vue';
import {mapState} from 'vuex';
import Toolbar from '@/components/Toolbar.vue'
import {api} from '@/service/service.js'
export default  {
  name: 'Tab1',
  components: { IonRow, IonCol, IonGrid, IonContent, IonPage, Toolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem},
  computed:{
    ...mapState(['title', 'search', 'ui_information_type_card']),
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