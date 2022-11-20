import {
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    BoxGeometry,
    CylinderGeometry,
    Mesh, 
    MeshBasicMaterial, 
    Color,
    Group,
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial,
    MeshPhongMaterial,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new Scene();
scene.background = new Color(0x21252d);
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new WebGLRenderer({antialias: true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/* Create Controls to allow for scene control */
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

/**
 * Box
 */
function create_2x2_cube(){
    const bluesky = new Color("rgb(115, 215, 255)");
    const material = new MeshBasicMaterial( { color: bluesky } );
    const cube = new BoxGeometry(0.8, 0.48, 0.8);
    const lego_cube = new Mesh(cube, material);
    const mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
    /* Borders*/
    let geo = new EdgesGeometry(lego_cube.geometry);
    let borders = new LineSegments(geo, mat);
    borders.renderOrder = 1; // make sure borders are rendered 2nd
    lego_cube.add( borders );
    lego_cube.position.set(0.0, 0.24, 0.0);
    return lego_cube;
};

function create_face(){
    const face = new Group()
    const bluesky = new Color("rgb(115, 215, 255)");
    const material = new MeshBasicMaterial( { color: bluesky } );
    const stud_geometry = new CylinderGeometry(0.1, 0.1, 0.12, 16);

    // Border
    let cylinder_geo = new EdgesGeometry(stud_geometry.geometry);
    const mat = new LineBasicMaterial({ color:0x000000, linewidth: 1 });
    let cylinder_borders = new LineSegments(cylinder_geo, mat);
    cylinder_borders.renderOrder = 1; // make sure borders are rendered 2nd

    const stud_shift = 0.2;
    const z = 0.54;
    //
    const stud_1 = new Mesh(stud_geometry, material);
    stud_1.add(cylinder_borders);
    stud_1.position.set(stud_shift, z, stud_shift);
    
    const stud_2 = new Mesh(stud_geometry, material);
    stud_2.add(cylinder_borders);
    stud_2.position.set(-stud_shift, z, stud_shift);

    const stud_3 = new Mesh(stud_geometry, material);
    stud_3.add(cylinder_borders);
    stud_3.position.set(stud_shift, z, -stud_shift);

    const stud_4 = new Mesh(stud_geometry, material);
    stud_4.add(cylinder_borders);
    stud_4.position.set(-stud_shift, z, -stud_shift);
    //
    face.add(stud_1);
    face.add(stud_2);
    face.add(stud_3);
    face.add(stud_4);
    //
    return face;
};
/**
 * Lego
 */
const lego = new Group();
const cube = create_2x2_cube();
const face = create_face();
lego.add(cube);
lego.add(face);
scene.add(lego);

export function animate() {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );
};

