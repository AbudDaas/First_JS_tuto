<template>

    <div id="rotate">
        <div id="top" class="nav_btn" title='Rotate left' @click="$emit('rotateCam', 0.05, 0.0)">
            <small>▲</small>
        </div>
        <div id="bottom" class="nav_btn" title='Rotate up' @click="$emit('rotateCam', -0.05, 0.0)">
            <small>▼</small>
        </div>
        <div id="right" class="nav_btn" title='Rotate right' @click="$emit('rotateCam', 0.0 , -0.05)">
            <small>▶</small>
        </div>
        <div id="left" class="nav_btn" title='Rotate down' @click="$emit('rotateCam', 0.0 , 0.05)">
            <small>◀</small>
        </div>
        <div id="middle" class="nav_btn" @click="$emit('resetCam')">H</div>
        </div>
    
        <div id="zoom_panel">
        <div id="zoom_in" class="nav_btn" title='Zoom out' @click="$emit('zoomCam', true)">
            <b>+</b>
        </div>
        <div id="zoom_out" class="nav_btn" title='Zoom in' @click="$emit('zoomCam', false)">
            <b>-</b>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name: "SceneControls",
        emits: ['rotateCam', 'resetCam', 'zoomCam'],
    }
    </script>
    
    <style>
        @import '../css/SceneControls.css';
    </style>
    