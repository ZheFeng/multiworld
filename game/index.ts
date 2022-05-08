
export class Player {
    atoms: Atom[];

    constructor() {
        this.atoms = [];
    }

    collect(atom: Atom) {
        this.atoms.push(atom);
    }
}

export class Atom {}

export class WorldItem<T> {
    item: T;
    coordinate: Coordinate;

    constructor(item: T, coordinate: Coordinate) {
        this.item = item;
        this.coordinate = coordinate;
    }
}

enum WORLD_ATOM_GENERATE_DIFFICULTY {
    less = 9,
    normal = 5,
    more = 2
}


export enum DIRECTION {
    up = 'j',
    down = 'k',
    left = 'h',
    right = 'l',
}


export class World {
    player: WorldItem<Player>;
    atoms: WorldItem<Atom>[];
    atomGenerateRate: WORLD_ATOM_GENERATE_DIFFICULTY; // 2-9
    width: number;
    height: number;
    
    constructor() {
        this.width = 20;
        this.height = 20;
        this.player = new WorldItem(new Player(), new Coordinate(0, 0));
        this.atomGenerateRate = WORLD_ATOM_GENERATE_DIFFICULTY.normal;
        this.atoms = [];
        this.generateAtoms();
    }

    generateAtoms() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const random = Math.floor(Math.random() * this.atomGenerateRate);
                if (random === 0) {
                    this.atoms.push(new WorldItem(new Atom(), new Coordinate(x, y)));
                }
            }   
        }
    }

    movePlayer(direction: DIRECTION) {
        this.moveItem(direction, this.player)
    }

    moveItem<T>(direction: DIRECTION, item: WorldItem<T>) {
        const coordinate = Coordinate.clone(item.coordinate);
        switch (direction) {
            case DIRECTION.up:
                coordinate.y--;
                break;
        
            case DIRECTION.down:
                coordinate.y++;
                break;
        
            case DIRECTION.left:
                coordinate.x--;
                break;
        
            case DIRECTION.right:
                coordinate.x++
                break;
        
            default:
                break;
        }

        if (coordinate.x >= 0 && coordinate.x <= this.width &&
            coordinate.y >= 0 && coordinate.y <= this.height) {
                item.coordinate = coordinate;
            }
    }
}

export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static clone(coordinate: Coordinate) {
        return new Coordinate(coordinate.x, coordinate.y);
    }
}
