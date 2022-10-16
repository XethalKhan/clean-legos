import { CreateNoteUseCaseInput } from '@clean-legos/use-case-notes';

export default function buildCreateNoteController(inputGateway, logger) {
  return async function createNoteController(text) {
    logger.info(`Start create note action ${text}`);

    const input = new CreateNoteUseCaseInput(text);

    await inputGateway(input);
  };
}
