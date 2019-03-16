var scene, camera, renderer;
const width = window.innerWidth;
const height = window.innerHeight;
const ratio = width / height;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
  camera.position.z = 5;
  
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setClearColor('#e5e5e5');
  renderer.setSize(width, height);

  document.getElementById('webgl').append(renderer.domElement);

  const sphere = getSphere(1, 10, 10, 0xffcc00);
  scene.add(sphere);

  renderer.render(scene, camera);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

const getSphere = (radius, width, height, color) => {
  let geometry = new THREE.SphereGeometry(radius, width, height);
  let material = new THREE.MeshLambertMaterial({ color });
  return new THREE.Mesh(geometry, material);
};

init();