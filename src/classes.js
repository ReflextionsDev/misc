// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Task {
    constructor() {
        console.log('created task')
    }

    showID() {
        console.log(23)
    }

    // class function
    static loadAll() {
        console.log('Loading all tasks...')
    }
}

console.log(typeof Task)
const task = new Task()
task.showID()
Task.loadAll()

class Player {
    constructor(name, health) {
        console.log('created player')
        this.name = name
        this.health = health
        this.maxHealth = 100
        this.createdAt = new Date()
    }

    getStats() {
        const x = [
            this.name,
            this.health,
            this.createdAt
        ]
        return x
    }

    get missingHealth() {
        return this.calcHealth()
        // return 10
    }

    calcHealth() {
        return (this.maxHealth - this.health)
    }

    static info() {
        console.log('Player Info')
        return 'f'
    }
}

class PlayerWithAGun extends Player {
    constructor(name, health) {
        super(name, health)
        console.log('creating player w/ gun')
        this.gun = 'shotgun'
    }
}

// Player 1
const player1 = new Player('Jeff', 100)
console.log(player1)
console.log('health', player1.health)
console.log('getStats', player1.getStats())
console.log('missingHealth', player1.missingHealth)
console.log('info', Player.info())


// Player 2
const player2 = new PlayerWithAGun('Jordan', 50)
console.log(player2)