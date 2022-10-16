import { CreateUseCaseOutput } from '@clean-legos/use-case-core';

export default class CreateNoteUseCaseOutput extends CreateUseCaseOutput {
  constructor(id, text, success) {
    super();
    this.id = id;
    this.text = text;
    this.success = success;
  }
}
