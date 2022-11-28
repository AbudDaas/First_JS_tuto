<template>
    <div id = "container">
      <SceneControls
        @rotate-cam="rotateCamera"
        @reset-cam="resetCamera"
        @zoom-cam="zoomCamera"
      />
    </div>
  </template>

<script>
import { Vector3 } from "three";
import SceneCreator from "../js/SceneCreator.js";
import CreateLego from "../js/LegoCreator.js";
import { createBase, loadYumi } from "../js/ModelCreator.js";
import SceneControls from "./SceneControls.vue";

export default {
    name: "MyScene",
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.container = document.getElementById("container");
            const sceneCreator_ = new SceneCreator(this.container);
            this.scene = sceneCreator_.getScene();
            this.camera = sceneCreator_.getCamera();
            this.renderer = sceneCreator_.getRenderer();
            createBase(this.scene);
            //loadYumi(this.scene);


            const lego_1_pos = new Vector3(9, 1, 0);
            new CreateLego(this.scene, 6, "l", "lego_1", lego_1_pos, false);


            const lego_2_pos = new Vector3(0, 0, 0);
            new CreateLego(this.scene, 6, "o", "lego_2", lego_2_pos, false);


            const lego_13_pos = new Vector3(1, 0, 0);
            new CreateLego(this.scene, 6, "y", "lego_13", lego_13_pos, true);

        },
        resetCamera(){
            this.scene.rotation.set(0, 0, 0);
            this.camera.position.set(0.5, 10, 7);
        },
        rotateCamera(rx, ry){
            let new_rot_x;
            let new_rot_y;
            let new_rot_z;
            new_rot_x = this.scene.rotation.x + rx;
            new_rot_y = this.scene.rotation.y + ry;
            new_rot_z = this.scene.rotation.z;
            this.scene.rotation.set(new_rot_x, new_rot_y, new_rot_z);
        },
        moveCamera(dx, dz){
            let new_pos_x = this.camera.position.x + dx;
            let new_pos_y = this.camera.position.y;
            let new_pos_z = this.camera.position.z + dz;
            this.camera.position.set(new_pos_x, new_pos_y, new_pos_z);
        },
        zoomCamera(away = false){
            let new_pos_x;
            let new_pos_y;
            let new_pos_z;
            if (!away){
                new_pos_x = this.camera.position.x;
                new_pos_y = this.camera.position.y + 2.5;
                new_pos_z = this.camera.position.z + 1.25;
                this.camera.position.set(new_pos_x, new_pos_y, new_pos_z);
            } else{
                new_pos_x = this.camera.position.x;
                new_pos_y = this.camera.position.y - 2.5;
                new_pos_z = this.camera.position.z - 1.25;
                this.camera.position.set(new_pos_x, new_pos_y, new_pos_z);
            }      
        },
        

    },
    components: {
        SceneControls,
    },
}
</script>

<style>
    @import '../css/MyScene.css'; 
</style>
