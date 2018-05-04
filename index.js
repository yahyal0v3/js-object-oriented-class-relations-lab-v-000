class Driver {
  driverId = 0

  constructor(name) {
    this.id = ++driverId
    this.name = name
  }
}
