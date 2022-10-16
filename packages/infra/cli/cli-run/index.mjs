import { buildNotePresenter } from '@clean-legos/adapter-presenter';

import { buildCreateUseCaseInteractor } from '@clean-legos/use-case-core';

import { buildCreateNoteUseCase } from '@clean-legos/use-case-notes';

import { buildStorageBootstrap, buildNotesStorage } from '@clean-legos/txt-file-storage';

import { buildCreateNoteController } from '@clean-legos/adapter-controller';

import { buildCreateNoteEndView } from '@clean-legos/cli-view';

const bootstrap = buildStorageBootstrap(console);

const notesPresenter = buildNotePresenter(console);

const notesStorage = buildNotesStorage(console);

const createNoteUseCase = buildCreateNoteUseCase(notesStorage, console);

// eslint-disable-next-line max-len
const createUseCaseInteractor = buildCreateUseCaseInteractor(createNoteUseCase, notesPresenter.process);

const createNoteController = buildCreateNoteController(createUseCaseInteractor, console);

async function exec() {
  await bootstrap();
  await createNoteController('Pera note test');

  const view = buildCreateNoteEndView();
  const viewModel = notesPresenter.viewModel();
  view.display(viewModel);
}

exec();
