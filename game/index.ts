
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
    up,
    down,
    left,
    right,
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
                if (random === 0 && x != 0 && y != 0) {
                    const coordinate = new Coordinate(x, y);
                    this.createAtom(coordinate);
                }
            }   
        }
    }

    createAtom(coordinate: Coordinate) {
        const atom = new WorldItem(new Atom(), coordinate);
        this.atoms.push(atom);
    }

    findAtomIndex(coordinate: Coordinate): number {
        return this.atoms.findIndex(atom => {
            return atom.coordinate.x === coordinate.x && atom.coordinate.y === coordinate.y;
        });
    }


    movePlayer(direction: DIRECTION) {
        const coordinate = World.moveCoordinate(direction, this.player.coordinate);
        if (this.isInWorld(coordinate)) {
            this.player.coordinate = coordinate;
            const index = this.findAtomIndex(coordinate);
            if (index > -1) {
                const [atom] = this.atoms.splice(index, 1);
                this.player.item.collect(atom);
            }
            
        }
    }

    isInWorld(coordinate: Coordinate): boolean {
        return coordinate.x >= 0 && coordinate.x <= this.width &&
        coordinate.y >= 0 && coordinate.y <= this.height
    }

    static moveCoordinate(direction: DIRECTION, coordinate: Coordinate): Coordinate {
        let x = coordinate.x;
        let y = coordinate.y;
        switch (direction) {
            case DIRECTION.up:
                y--;
                break;
        
            case DIRECTION.down:
                y++;
                break;
        
            case DIRECTION.left:
                x--;
                break;
        
            case DIRECTION.right:
                x++
                break;
        
            default:
                break;
        }
        return new Coordinate(x, y);
    }
}

export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    clone() {
        return new Coordinate(this.x, this.y);
    }
}
