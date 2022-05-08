
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
}

export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
