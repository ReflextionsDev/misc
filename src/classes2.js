
class DBObject {
    #creationDate
    #lastModifiedDate
    #lastModifiedEvents
    // _uuid

    constructor() {
        console.log("DBObject Constructor")
        this.#creationDate = new Date().getTime()
        this.#lastModifiedDate = new Date().getTime()
        this.#lastModifiedEvents = []
        // this.uuid = 0
    }

    get creationDate() {
        return this.#creationDate
    }

    get lastModifiedDate() {
        return this.#lastModifiedDate
    }

    get lastModifiedEvents() {
        return this.#lastModifiedEvents
    }

    set lastModifiedDate(date) {
        this.#lastModifiedDate = date
        this.#lastModifiedEvents.push(date)
    }

    get formattedCreationDate() {
        return new Date(this.#creationDate).toISOString()
    }

    get formattedLastModifiedDate() {
        return new Date(this.#lastModifiedDate).toISOString()
    }

    get formattedLastModifiedEvents() {
        return (
            this.#lastModifiedEvents.map((date) => ("Date: " + date))
        )
    }

    // set UUID (uuid) {
    //     this.uuid = uuid
    // }
}

const object1 = new DBObject()

class User extends DBObject {
    constructor() {
        super()
    }
}

// have a private getter and a setter for lastModifiedDate
// when a new lastModifiedDate is set, it should push that date into the lastModifiedEvents array

console.log("direct date", object1.creationDate)
console.log(object1.formattedLastModifiedDate)
console.log(object1.formattedCreationDate)
console.log(object1.formattedLastModifiedEvents)

object1.lastModifiedDate = 232
object1.lastModifiedDate = 6732

console.log(object1.formattedLastModifiedDate)
console.log(object1.formattedLastModifiedEvents)

    // console.log(object1.uuid)