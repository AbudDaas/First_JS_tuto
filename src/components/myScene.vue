<template>
    <div id = "container">
        
    </div>
</template>
<script>
import {animate} from "../js/myScene.js"

export default {
    name: "MyScene",
    mounted(){
        this.init();
    },
    methods:{
        init(){
            animate();
        }
    },
}
</script>
<style>
   @import "../css/myScene.css" ;
</style>