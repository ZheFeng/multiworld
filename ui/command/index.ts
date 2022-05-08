import inquirer from "inquirer";

import { World, DIRECTION } from "../../game";

const directionMap = new Map<string, DIRECTION>();
directionMap.set('j', DIRECTION.up);
directionMap.set('k', DIRECTION.down);
directionMap.set('h', DIRECTION.left);
directionMap.set('l', DIRECTION.right);

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


function printInfo(game: Game) {
    console.log(`Player position: ${game.world.player.coordinate.x} x ${game.world.player.coordinate.y}`)
    console.log(`Player atoms count: ${game.world.player.item.atoms.length}`);
    console.log(`World atoms count: ${game.world.atoms.length}`)
}

export async function start() {
    const game = new Game();
    console.log('Game started:');
    console.log(`World size: ${game.world.width} x ${game.world.height}`);
    const positions = game.world.atoms.map(atom => `${atom.coordinate.x}-${atom.coordinate.y}`).join('; ');
    console.log(`Atom position: ${positions}`)


    printInfo(game);
    while(game.live) {
        const { direction } = await inquirer.prompt({
            type: 'input',
            name: 'direction',
            message: "Make a move: ",
        });

        if (direction === 'exit') return game.exit();
        
        if (directionMap.has(direction)) {
            game.world.movePlayer(directionMap.get(direction) as DIRECTION);
            printInfo(game);
        }
    }
}

