const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
    .1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x95f0ff});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

var xSpeed = .04;
var ySpeed = .04;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += xSpeed;
    cube.rotation.y += ySpeed;
    renderer.render(scene, camera);
}

animate();