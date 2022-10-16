import { CreateUseCaseInput } from '@clean-legos/use-case-core';

export default class CreateNoteUseCaseInput extends CreateUseCaseInput {
  constructor(text) {
    super();
    this.text = text;
  }
}
