var renderer;
var scene;
var camera;
var cameraControl;

function createRenderer() {
	container = document.getElementById( 'canvas' );
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(container.clientWidth, 800);
    renderer.shadowMap.enabled = true;
}

function createCamera() {
    camera = new THREE.PerspectiveCamera(
            45,
        container.clientWidth / 800,
            0.1, 1000);
    camera.position.x = 90;
    camera.position.y = 32;
    camera.position.z = 32;
    camera.lookAt(scene.position);

    cameraControl = new THREE.OrbitControls(camera);
}

function createLight() {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 10, -50);
    directionalLight.name = 'directional';
    scene.add(directionalLight);

    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
}


function createBike() {
    //load bike
    var loader = new THREE.ObjectLoader();
    loader.load('bike/manual-bike-import.json', function(obj){

        scene.add( obj );
        
    });
}



//init() gets executed once
function init() {

    scene = new THREE.Scene();
    
    createRenderer();
    createCamera();
    createLight();

    createBike();

    document.getElementById( 'canvas' ).appendChild(renderer.domElement);

    //render() gets called at end of init
    //as it looped forever
    render();
}

//infinite loop
function render() {

    cameraControl.update();

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
