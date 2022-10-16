import { CreateNoteUseCaseOutput } from '@clean-legos/use-case-notes';

import CreateNoteViewModel from './CreateNoteViewModel.js';

export default function buildNotePresenter(logger) {
  let viewModel;
  return {
    process(input) {
      if (input instanceof CreateNoteUseCaseOutput) {
        viewModel = new CreateNoteViewModel(input.id, input.text);
        logger.info('Create note use case output presenter call');
      }
    },
    viewModel() {
      return viewModel;
    },
  };
}
