// Soldier
class Soldier{
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    return this.health > 0 ? this.name + ' has received ' + damage + ' points of damage' : this.name + ' has died in act of combat'
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage
    return this.health > 0 ? 'A Saxon has received ' +  damage + ' points of damage'  : 'A Saxon has died in combat'
  }
}

// War
class War{
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const damageTaken = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
    if (this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon, 1)
    return damageTaken
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const damageTaken = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
    if (this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking, 1)
    return damageTaken
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}

// New Soldier
const enemy1 = new Soldier(120, 10)
console.log(enemy1.attack())
enemy1.receiveDamage(30)
console.log(enemy1.health)

// New Viking
const viking1 = new Viking('Eren', 180, 30)
const viking2 = new Viking('Vall', 160, 40)
const viking3 = new Viking('Thuss', 170, 35)
console.log(viking1.attack())
console.log(viking1.receiveDamage(40))
console.log(viking1.health)
console.log(viking1.battleCry())

// New Saxon
const saxon1 = new Saxon(80, 50)
const saxon2 = new Saxon(90, 45)
const saxon3 = new Saxon(75, 40)
console.log(saxon1.attack())
console.log(saxon1.receiveDamage(25))
console.log(saxon1.health)

// New War

const war1 = new War()
war1.addViking(viking1)
war1.addSaxon(saxon1)
war1.addViking(viking2)
war1.addSaxon(saxon2)
war1.addViking(viking3)
war1.addSaxon(saxon3)
console.log(war1.vikingArmy)
console.log(war1.saxonArmy)
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingArmy.length)
console.log(war1.saxonArmy.length)
console.log(war1.vikingAttack())
console.log(war1.saxonAttack())
console.log(war1.showStatus())
console.log(war1.vikingAttack())
console.log(war1.vikingArmy.length)
console.log(war1.saxonArmy.length)
console.log(war1.showStatus())