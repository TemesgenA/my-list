export default class Storage {
  static getLocalStorage() {
    if ((localStorage.getItem('to-do-item')) === null || (localStorage.getItem('to-do-item')) === 'undefined') {
      return [];
    }
    return JSON.parse(localStorage.getItem('to-do-item'));
  }

  static SetLocalStorage(arr) {
    localStorage.setItem('to-do-item', JSON.stringify(arr));
  }
}
