<template>
  <div id="main">
    
    <div id="menu">
      Menu
    </div>

    <div id="scene">
      scene
      <MyScene />
    </div>

    <div id="log">
      Log
    </div>

  </div>
  

</template>

<script>
import MyScene from "./components/MyScene.vue";

export default {
  methods: {},
  components: {
    MyScene,
  },
};
</script>

<style>
@import "./css/App.css";
</style>
