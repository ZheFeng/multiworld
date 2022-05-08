import { World } from "./game";

function startGame() {
    const world = new World();
    console.log('Game started:');
    console.log(`World size: ${world.width} x ${world.height}`);
    console.log(`Player position: ${world.player.coordinate.x} x ${world.player.coordinate.y}`)

    while(true) {

    }
}

startGame();