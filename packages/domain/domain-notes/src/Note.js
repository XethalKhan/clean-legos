import { BaseEntity } from '@clean-legos/domain-core';

export default class Note extends BaseEntity {
  constructor(id, text) {
    super(id);
    this.text = text;
  }
}
