import Note from '@clean-legos/domain-notes';

import CreateNoteUseCaseInput from './CreateNoteUseCaseInput.js';
import CreateNoteUseCaseOutput from './CreateNoteUseCaseOutput.js';

export default function buildCreateNoteUseCase(databaseRepository, logger) {
  return async function createUseCase(input) {
    logger.info('create use case start');

    if (!(input instanceof CreateNoteUseCaseInput)) {
      logger.error(`use case input is of wrong type, expected CreateUseCaseInput instead got ${typeof input}`);
    }

    const note = new Note(0, input.text);

    const entity = await databaseRepository.save(note);

    logger.info(`saved successfully ${entity.toString()}`);

    return new CreateNoteUseCaseOutput(entity.id, entity.text, true);
  };
}
