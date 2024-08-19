import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

// using groups to group objects and then do transformation on the group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  })
);

cube1.position.x = -2;

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  })
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x4c00b0,
  })
);

cube3.position.x = 2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 0.5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// Positioning the object
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

//Alternative syntax to setting the position of a mesh
// mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

//Alternative syntax to setting the scale of a mesh
mesh.scale.set(2, 0.5, 0.5);

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Rotation
// To expicitly say the ratation order use the fallowing method
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// Distance from the origin
console.log(mesh.position.length());

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// use the following method to look directly into the object
camera.lookAt(mesh.position);

// Distance between the object and the camera
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
