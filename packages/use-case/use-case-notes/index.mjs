import buildCreateNoteUseCaseImpl from './src/notes/create.js';

import CreateNoteUseCaseInputImpl from './src/notes/CreateNoteUseCaseInput.js';
import CreateNoteUseCaseOutputImpl from './src/notes/CreateNoteUseCaseOutput.js';

export const buildCreateNoteUseCase = buildCreateNoteUseCaseImpl;

export const CreateNoteUseCaseInput = CreateNoteUseCaseInputImpl;
export const CreateNoteUseCaseOutput = CreateNoteUseCaseOutputImpl;

export default {
  CreateNoteUseCaseInput,
  CreateNoteUseCaseOutput,
  buildCreateNoteUseCase,
};
