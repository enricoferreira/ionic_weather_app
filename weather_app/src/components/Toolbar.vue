<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
            <slot name="buttons-toolbar"></slot>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['title'])
    }
}
</script>

<style>

</style>