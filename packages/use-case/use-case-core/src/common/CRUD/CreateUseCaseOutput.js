import BaseUseCaseOutput from '../BaseUseCaseOutput.js';

export default class CreateUseCaseOutput extends BaseUseCaseOutput {
  constructor(entity) {
    super();
    this.entity = entity;
  }
}
