import { buildNotePresenter } from '@clean-legos/adapter-presenter';

import { buildCreateUseCaseInteractor } from '@clean-legos/use-case-core';

import { buildCreateNoteUseCase } from '@clean-legos/use-case-notes';

import { buildStorageBootstrap, buildNotesStorage } from '@clean-legos/txt-file-storage';

import { buildCreateNoteController } from '@clean-legos/adapter-controller';

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
}

exec();
