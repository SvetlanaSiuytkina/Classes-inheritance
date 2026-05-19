import Character from "../classes/Character.js";

export default class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}