<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
        <ion-toolbar color="primary" v-if="search_active">
            <ion-searchbar @ionInput="atualizarSearch" v-model="searchable"></ion-searchbar>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
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
        ...mapMutations(['CHANGE_SEARCH']),
        atualizarSearch(v){
            this.CHANGE_SEARCH(v.target.value)
        }
    },
    computed:{
        ...mapState(['title', 'search']),
        searchable(){
            return this.search;
        }
    }
}
</script>

<style>

</style>