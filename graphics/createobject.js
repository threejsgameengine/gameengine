/*
Stub function to get a minimum working example up
*/

function createObject(gameScene) {
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    let cube = new THREE.Mesh( geometry, material);

    gameScene.scene.add(cube);
}