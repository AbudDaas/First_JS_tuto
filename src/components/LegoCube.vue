<template lang="html">
</template>
<script>
import {animate} from "../js/myScene.js"

export default {    name: "MyScene",
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
<style lang=js>
    @import "../css/myScene.css" ;
</style>