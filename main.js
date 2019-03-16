var scene, camera, renderer;
const width = window.innerWidth;
const height = window.innerHeight;
const ratio = width / height;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setClearColor('#e5e5e5');
  renderer.setSize(width, height);

  document.getElementById('webgl').append(renderer.domElement);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  renderer.render(scene, camera);
};

init();
