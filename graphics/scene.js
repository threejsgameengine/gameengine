/*
* For now, minimum working example of scene creation
*/

/*
    gameScene :
        scene : null
        camera : null
        renderer : null
*/

function createScene( gameScene ) {
    gameScene.scene = new THREE.Scene();
    gameScene.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    gameScene.renderer = new THREE.WebGLRenderer();
    gameScene.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(gameScene.renderer.domElement);

    return gameScene;
}