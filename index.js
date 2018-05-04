let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    return store.trips.map(trip => trip.driver)
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }
}
