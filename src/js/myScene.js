import {
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    BoxGeometry, 
    Mesh, 
    MeshBasicMaterial, 
    Color,
} from "three"

const scene = new Scene();
scene.background = new Color(0x21252d);
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer({antialias: true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshBasicMaterial( { color: rgb(255,255,255) } );
const cube = new Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;



export function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x = 0.5;
    cube.rotation.y = 0.5;

    renderer.render( scene, camera );
};

