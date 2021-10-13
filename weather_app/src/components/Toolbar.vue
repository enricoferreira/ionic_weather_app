<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
        <ion-toolbar v-if="search_active">
            <ion-searchbar v-model="search"></ion-searchbar>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {mapState} from 'vuex';
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
            search: '',
        }
    },
    methods:{

    },
    computed:{
        ...mapState(['title'])
    }
}
</script>

<style>

</style>