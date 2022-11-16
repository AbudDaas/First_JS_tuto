<template>
  <div id="main">
  <div>Menu</div>
  <div>
    Main
    <MyScene/>
</div>
  <div>Log</div>
  </div>

</template>

<script>
import MyScene from './components/myScene.vue';

export default {
    methods: {},
    components: {
        MyScene,
    }
}
</script>

<style>
  @import './css/App.css';
</style>