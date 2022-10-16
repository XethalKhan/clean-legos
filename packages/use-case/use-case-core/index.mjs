import BaseUseCaseInputImpl from './src/common/BaseUseCaseInput.js';
import BaseUseCaseOutputImpl from './src/common/BaseUseCaseOutput.js';

import CreateUseCaseInputImpl from './src/common/CRUD/CreateUseCaseInput.js';
import CreateUseCaseOutputImpl from './src/common/CRUD/CreateUseCaseOutput.js';

import buildCreateUseCaseInteractorImpl from './src/common/CRUD/CreateUseCaseInteractor.js';

export const BaseUseCaseInput = BaseUseCaseInputImpl;
export const BaseUseCaseOutput = BaseUseCaseOutputImpl;

export const CreateUseCaseInput = CreateUseCaseInputImpl;
export const CreateUseCaseOutput = CreateUseCaseOutputImpl;

export const buildCreateUseCaseInteractor = buildCreateUseCaseInteractorImpl;

export default {
  CreateUseCaseInput,
  CreateUseCaseOutput,
  buildCreateUseCaseInteractor,
};
