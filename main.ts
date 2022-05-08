import inquirer from "inquirer";

import { World, DIRECTION } from "./game";


class Game {
    world: World;
    live: boolean;

    constructor() {
        this.world = new World();
        this.live = true;
    }

    exit() {
        this.live = false;
    }
}


async function startGame() {
    const game = new Game();
    console.log('Game started:');
    console.log(`World size: ${game.world.width} x ${game.world.height}`);
    console.log(`Player position: ${game.world.player.coordinate.x} x ${game.world.player.coordinate.y}`)

    while(game.live) {
        const answers = await inquirer.prompt({
            type: 'input',
            name: 'direction',
            message: "Make a move: ",
        });

        if (answers.direction === 'exit') return game.exit();
        game.world.movePlayer(answers.direction as DIRECTION);
        console.log(`Player position: ${game.world.player.coordinate.x} x ${game.world.player.coordinate.y}`)
    }
}

startGame();