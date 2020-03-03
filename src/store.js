import data from './data/data';
import interfaceText from './data/interface';

class Store {
  static getData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 1300)
    })
  }
  static getInterface() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(interfaceText), 1300)
    })
  }
}


export default Store
