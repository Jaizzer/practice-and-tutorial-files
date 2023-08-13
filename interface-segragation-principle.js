/*
    Interface segragation says that when you have an interface and a particular classes uses that interface,
    then that class should use every method inside that interface.

    However, JavaScript do not yet have interface feature, hence we will just use 'composition'.

    In this example, 'Entity' is the parent class while 'mover', 'attacker' and 'hasHealth' our the features
    we want to implement to the subclasses of 'Entity' like 'Character', 'Wall', and "Turret" classes.

    1.  Character class implements mover, attacker and hasHealth since all of those apply to characters.
    2. Character class only implements 'hasHealth' object because wall only have health and can't attack nor move.
    3. Character turrent only implements 'hasHealth' and 'attacker' since it can only have health and attack but can't move.
*/

class Entity {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}


// Character class implements mover, attacker and hasHealth since all of those apply to characters.
class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}
Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);


// Character class only implements 'hasHealth' object because wall only have health and can't attack nor move.
class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}
Object.assign(Wall.prototype, hasHealth);


// Character turrent only implements 'hasHealth' and 'attacker' since it can only have health and attack but can't move.
class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}
Object.assign(Turret.prototype, hasHealth)
Object.assign(Turret.prototype, attacker)



const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);

/*
    Console outputs:
        Turret attacked Character for 5 damage
        Character has 95 health remaining
        Character moved
        Character attacked Wall for 3 damage
        Wall has 197 health remaining
*/