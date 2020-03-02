import data from './data'

class Store {
  static getData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 1300)
    })
  }
}

export default Store
