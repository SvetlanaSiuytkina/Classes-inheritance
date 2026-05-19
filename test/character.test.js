import {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../src/index.js';

test('Bowerman development', () => {
    const bowerman = new Bowerman('Max');

    expect(bowerman.name).toBe('Max');
    expect(bowerman.type).toBe('Bowman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
});

test('Swordsman development', () => {
    const swordsman = new Swordsman('Ivan');

    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
});

test('Magician development', () => {
    const magician = new Magician('Petr');

    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
});

test('Daemon development', () => {
    const daemon = new Daemon('Oxana');

    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
});

test('Undead development', () => {
    const undead = new Undead('Victor');

    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
});

test('Zombie development', () => {
    const zombie = new Zombie('Kirill');

    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
});

test('short name(less than 3 characters)', () => {
    expect(() => new Bowerman('Q')).toBe('Max');
});

test('long name (more than 10 characters)', () => {
    expect(() => new Bowerman('myNameIsMax')).toBe('Max');
});