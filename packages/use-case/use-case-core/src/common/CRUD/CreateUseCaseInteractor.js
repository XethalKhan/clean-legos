import CreateUseCaseInput from './CreateUseCaseInput.js';

export default function buildCreateUseCaseInteractor(createUseCase, outputGateway) {
  return async function CreateUseCaseInteractor(input) {
    let output = null;

    if (input instanceof CreateUseCaseInput) {
      output = await createUseCase(input);
    }

    outputGateway(output);
  };
}
