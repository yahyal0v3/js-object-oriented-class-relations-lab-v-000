let driverId = 0
let store = {drivers: [], passenger: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}
