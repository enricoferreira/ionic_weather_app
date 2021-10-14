<template>
    <ion-header collapse>
        <ion-toolbar color="primary">
            <ion-buttons slot="end">
                <ion-button v-if="!ui_information_type_card" @click="changeTypeInfo(true)">
                    <ion-icon :icon="idCard"></ion-icon>
                </ion-button>
                <ion-button v-else @click="changeTypeInfo(false)">
                    <ion-icon :icon="list"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
        <ion-toolbar color="primary" v-if="search_active">
            <ion-searchbar placeholder="Encontre seu personagem..." @ionInput="atualizarSearch" v-model="searchable"></ion-searchbar>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import { idCard, list } from 'ionicons/icons';
export default {
    props: {
        search_active:{
            default: function(){
                return false
            }
        }
    },
    data(){
        return{
        }
    },
    methods:{
        ...mapMutations(['CHANGE_SEARCH', 'CHANGE_INFORMATION_TYPE_CARD']),
        atualizarSearch(v){
            this.CHANGE_SEARCH(v.target.value)
        },
        changeTypeInfo(v){
            this.CHANGE_INFORMATION_TYPE_CARD(v);
        }
    },
    setup() {
        return {
            idCard,
            list
        }
    },
    computed:{
        ...mapState(['title', 'search', 'ui_information_type_card']),
        searchable(){
            return this.search;
        }
    }
}
</script>

<style>

</style>