export default class BaseEntity {
  constructor(id) {
    this.id = id;
  }

  toString() {
    return `Base entity ${this.id}`;
  }
}
