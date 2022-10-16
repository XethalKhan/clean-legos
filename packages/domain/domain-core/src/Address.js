import BaseEntity from './BaseEntity.js';

export default class Address extends BaseEntity {
  constructor(id, line1, line2, city, postalCode) {
    super(id);
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.postalCode = postalCode;
  }
}
